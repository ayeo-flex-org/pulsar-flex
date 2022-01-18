const responseMediators = require('../responseMediators');
const services = require('./services');
const Pulsar = require('../client');
const {
  PulsarFlexNotSubscribedError,
  PulsarFlexSubscribeError,
  PulsarFlexUnsubscribeError,
} = require('../errors');
const pulsarApi = require('../commands/protocol/pulsar/pulsar_pb');
const { createLogger, LEVELS } = require('../logger');
const defaultLogger = require('../logger/default');
const PriorityQueue = require('./priorityQueue');
const { EventEmitter } = require('events');
const SUB_TYPES = pulsarApi.CommandSubscribe.SubType;
const ACK_TYPES = { ...pulsarApi.CommandAck.AckType, NEGATIVE: -1 };
const INITIAL_POSITION = pulsarApi.CommandSubscribe.InitialPosition;
const STATES = {
  ACTIVE: 'ACTIVE', // Subscribed and consuming messages
  INACTIVE: 'INACTIVE', // Subscribed but not consuming messages
  UNSUBSCRIBED: 'UNSUBSCRIBED', // Not subscribed
  RECONNECTING: 'RECONNECTING', // ???
};

module.exports = class Consumer {
  constructor({
    discoveryServers,
    jwt,
    topic,
    subscription,
    subType,
    consumerName,
    prioritizeUnacknowledgedMessages = false,
    initialPosition = INITIAL_POSITION.LATEST,
    readCompacted = false,
    receiveQueueSize = 500,
    reconnectInterval = 5000,
    logLevel,
    logCreator = defaultLogger,
    stateChangeHandler = null,
  }) {
    this._logger = createLogger({ logLevel, logCreator });
    this._client = new Pulsar({
      discoveryServers,
      jwt,
      logger: this._logger,
    });
    this._topic = topic;
    this._subscription = subscription;
    this._subType = subType;
    this._consumerName = consumerName;
    this._readCompacted = readCompacted;
    this._initialPosition = initialPosition;
    this._consumerId = 0;
    this._receiveQueueSize = receiveQueueSize;
    this._reconnectInterval = reconnectInterval;
    this._isRedeliveringUnacknowledgedMessages = false;
    this._emitter = new EventEmitter();
    this._prioritizeUnacknowledgedMessages = prioritizeUnacknowledgedMessages;
    this._requestId = 0;
    this._curFlow = receiveQueueSize;
    this._consumerState = STATES.UNSUBSCRIBED;
    this._redeliverAcksQueue = [];

    this._onMessageParams = {};
    this._processTimeoutInterval = null;

    this._onStateChangeHandler = stateChangeHandler;

    this._receiveQueue = new PriorityQueue({
      maxQueueSize: receiveQueueSize,
      logger: this._logger,
    });

    this._requestIdMediator = new responseMediators.RequestIdResponseMediator({
      client: this._client,
      commands: ['success', 'error', 'ackresponse'],
    });
    this._noId = new responseMediators.NoIdResponseMediator({
      client: this._client,
      commands: [],
    });

    this._isSubscribed = false;
    this._enqueueMessage = (data) => {
      if (this._receiveQueue.length() === this._receiveQueueSize) return;
      // Classic for, for performance
      for (let i = 0; i < data.messages.length; i++) {
        this._receiveQueue.enqueue(
          {
            command: data.command,
            metadata: data.messages[i].singleMessageMetadata
              ? data.messages[i].singleMessageMetadata
              : data.metadata,
            payload: data.messages[i].payload,
          },
          this._isRedeliveringUnacknowledgedMessages && this._prioritizeUnacknowledgedMessages
            ? 1
            : 2
        );
        this._isRedeliveringUnacknowledgedMessages &&
          this._setRedeliveringUnacknowledgedMessages(false);
      }
    };

    this._reflow = async () => {
      const nextFlow = Math.ceil(this._receiveQueueSize / 2);
      if (--this._curFlow < nextFlow) {
        this._logger.info(`Re-flow, asking for ${nextFlow} more messages.`);
        this._curFlow += nextFlow;
        await this._flow(nextFlow);
      }
    };
    services.redeliverAcks(this._client, this._redeliverAcksQueue, this._logger);
  }

  static get SUB_TYPES() {
    return SUB_TYPES;
  }

  static get ACK_TYPES() {
    return ACK_TYPES;
  }

  static get INITIAL_POSITION() {
    return INITIAL_POSITION;
  }

  static get CONSUMER_STATES() {
    return STATES;
  }

  subscribe = async () => {
    if (this._isSubscribed) {
      throw new PulsarFlexSubscribeError('Consumer is already subscribed.');
    }
    this._logger.info(
      `Creating client connection for consumer: ${this._consumerName}(${this._consumerId})`
    );
    await this._client.connect({ topic: this._topic });

    // Handles forceful & graceful shutdowns.
    this._logger.info(`Setting up connection failure...`);
    services.connectionFailure({
      client: this._client,
      subscribe: this.subscribe,
      cleanState: this._cleanState,
      consumerState: {
        get: this.getState,
        set: this._setState,
        states: Consumer.CONSUMER_STATES,
      },
      intervalMs: this._reconnectInterval,
      responseMediator: this._requestIdMediator,
    });
    this._logger.info(
      `request id: ${this._requestId} consumer: ${this._consumerName}(${this._consumerId}) subscribing topic: ${this._topic} subscription: ${this._subscription}`
    );
    await services.subscribe({
      cnx: this._client.getCnx(),
      topic: this._topic,
      subscription: this._subscription,
      subType: this._subType,
      consumerId: this._consumerId,
      consumerName: this._consumerName,
      initialPosition: this._initialPosition,
      readCompacted: this._readCompacted,
      requestId: this._requestId++,
      responseMediator: this._requestIdMediator,
    });
    this._isSubscribed = true;
    if (this.getState() === STATES.RECONNECTING) {
      await this.run(this._onMessageParams);
    } else {
      this._setState(STATES.INACTIVE);
    }
  };

  getState = () => {
    return this._consumerState;
  };

  _setState = (state) => {
    const previousState = this._consumerState;
    this._consumerState = state;
    this._logger.info(
      `Changing consumer state -> consumer: ${this._consumerName}(${
        this._consumerId
      }) STATE: ${this.getState()}`
    );
    if (this._onStateChangeHandler) {
      this._logger.debug('Executing consumer state change handler.');
      this._onStateChangeHandler({ previousState, newState: this._consumerState });
    }
  };

  _setRedeliveringUnacknowledgedMessages = (redeliveringUnacknowledgedMessages) => {
    if (
      redeliveringUnacknowledgedMessages &&
      (this._subType === SUB_TYPES.EXCLUSIVE || this._subType === SUB_TYPES.FAILOVER)
    )
      this._receiveQueue = new PriorityQueue({
        maxQueueSize: this._receiveQueueSize,
        logger: this._logger,
      });
    this._isRedeliveringUnacknowledgedMessages = redeliveringUnacknowledgedMessages;
  };

  _flow = async (flowAmount) => {
    await services.flow({
      cnx: this._client.getCnx(),
      flowAmount,
      consumerId: this._consumerId,
      responseMediator: this._noId,
    });
  };

  _cleanState = () => {
    clearTimeout(this._processTimeoutInterval);
    this._emitter.off('dequeueMessage', this._reflow);
    this._client.getResponseEvents().off('message', this._enqueueMessage);
    this._isSubscribed = false;
    this._receiveQueue = new PriorityQueue({
      maxQueueSize: this._receiveQueueSize,
      logger: this._logger,
    });
  };

  unsubscribe = async () => {
    if (!this._isSubscribed) {
      throw new PulsarFlexUnsubscribeError('Consumer is already unsubscribed.');
    }
    this._logger.info(
      `request id: ${this._requestId} consumer: ${this._consumerName}(${this._consumerId}) unsubscribing topic: ${this._topic} subscription: ${this._subscription}`
    );
    this._cleanState();
    await services.unsubscribe({
      cnx: this._client.getCnx(),
      consumerId: this._consumerId,
      requestId: this._requestId++,
      responseMediator: this._requestIdMediator,
    });
    this._logger.info(
      `Closing client connection for consumer: ${this._consumerName}(${this._consumerId})`
    );
    this._client.getCnx().close();
    this._setState(STATES.UNSUBSCRIBED);
  };

  _ack = async ({ messageIdData, ackType }) => {
    try {
      return await services.ack({
        client: this._client,
        consumerId: this._consumerId,
        messageIdData,
        ackType,
        requestId: this._requestId++,
        responseMediator: this._requestIdMediator,
        negativeAckResponseMediator: this._noId,
        setRedeliveringUnacknowledgedMessages: this._setRedeliveringUnacknowledgedMessages,
      });
    } catch (e) {
      await new Promise((resolve, reject) => {
        this._logger
          .warn(`Couldn't acknowledge message ledger id: ${messageIdData.ledgerid} entry id: ${messageIdData.entryid}
        adding acknowledge to redeliver queue (size: ${this._redeliverAcksQueue.length}, error: ${e}`);
        this._redeliverAcksQueue.push({
          func: () =>
            services.ack({
              client: this._client,
              consumerId: this._consumerId,
              messageIdData,
              ackType,
              requestId: this._requestId++,
              responseMediator: this._requestIdMediator,
            }),
          resolve,
          messageIdData,
        });
      });
    }
  };

  run = async ({ onMessage = null, autoAck = true }) => {
    if (!this._isSubscribed) {
      throw new PulsarFlexNotSubscribedError(
        'You must be subscribed to the topic in order to start consuming messages.'
      );
    }
    this._onMessageParams = { onMessage, autoAck };
    this._setState(STATES.ACTIVE);
    this._client.getResponseEvents().on('message', this._enqueueMessage);
    this._emitter.on('dequeueMessage', this._reflow);

    const process = async () => {
      if (!this._isSubscribed) {
        return;
      }
      if (
        this._receiveQueue.isEmpty() ||
        (this._isRedeliveringUnacknowledgedMessages && this._prioritizeUnacknowledgedMessages)
      ) {
        this._processTimeoutInterval = setTimeout(() => {
          this._logger.trace(`No messages in receive queue or redelivering unacknowledged messages,
          waiting 1 second to re-try process.`);
          process().catch((e) => {
            this._logger.error(`Error processing message, error ${e}`);
          });
        }, 1000);
        return;
      }
      const message = this._receiveQueue.dequeue();
      this._emitter.emit('dequeueMessage');
      if (autoAck) {
        await this._ack({
          messageIdData: message.command.messageId,
          ackType: ACK_TYPES.INDIVIDUAL,
        });
      }
      await onMessage({
        message: message.payload,
        metadata: message.metadata,
        command: message.command,
        redeliveryCount: message.command.redeliveryCount,
        properties: message.metadata.propertiesList.reduce(
          (accumulated, { key, value }) => ({ ...accumulated, [key]: value }),
          {}
        ),
        ack: (options = {}) =>
          this._ack({
            messageIdData: message.command.messageId,
            ackType: options.type ? options.type : ACK_TYPES.INDIVIDUAL,
          }),
      });
      this._logger.trace(`Finished processing message with id: ${message.command.messageId}`);
      process().catch((e) => {
        this._logger.error(`Error processing message, error: ${e}`);
      });
    };
    await this._flow(this._receiveQueueSize);
    this._logger.trace(`Started processing messages...`);
    process().catch((e) => {
      this._logger.error(`Error with the first process call, error: ${e}`);
    });
  };
};
