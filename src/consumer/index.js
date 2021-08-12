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
    proritizeUnacknowledgedMessages = false,
    initialPosition = INITIAL_POSITION.LATEST,
    readCompacted = false,
    receiveQueueSize = 500,
    reconnectInterval = 5000,
    logLevel,
    logCreator = defaultLogger,
  }) {
    this._logger = createLogger({ logLevel, logCreator });
    this._client = new Pulsar({
      discoveryServers,
      jwt,
      logger: this._logger,
    });
    this.topic = topic;
    this.subscription = subscription;
    this.subType = subType;
    this.consumerName = consumerName;
    this._proritizeUnacknowledgedMessages = proritizeUnacknowledgedMessages;
    this._unacknowledgedMessagesQueue = [];
    this.readCompacted = readCompacted;
    this.initialPosition = initialPosition;
    this.consumerId = 0;
    this.receiveQueueSize = receiveQueueSize;
    this.reconnectInterval = reconnectInterval;

    this._requestId = 0;
    this._curFlow = receiveQueueSize;
    this._consumerState = STATES.UNSUBSCRIBED;
    this._redeliverAcksQueue = [];

    this._onMessageParams = {};
    this._processTimeoutInterval = null;

    this.receiveQueue = [];

    this._requestIdMediator = new responseMediators.RequestIdResponseMediator({
      client: this._client,
      commands: ['success', 'error', 'ackresponse'],
    });
    this.noId = new responseMediators.NoIdResponseMediator({
      client: this._client,
      commands: [],
    });

    this.isSubscribed = false;
    this._reflow = async (data) => {
      // Classic for, for performance
      for (let i = 0; i < data.payload.length; i++) {
        this.receiveQueue.push({
          command: data.command,
          metadata: data.metadata,
          payload: data.payload[i],
        });
      }
      const nextFlow = Math.ceil(this.receiveQueueSize / 2);
      if (--this._curFlow <= nextFlow) {
        this._curFlow += nextFlow;
        this._logger.info(`Re-flow, asking for ${nextFlow} more messages.`);
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
    if (this.isSubscribed) {
      throw new PulsarFlexSubscribeError('Consumer is already subscribed.');
    }
    this._logger.info(
      `Creating client connection for consumer: ${this.consumerName}(${this.consumerId})`
    );
    await this._client.connect({ topic: this.topic });

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
      intervalMs: this.reconnectInterval,
      responseMediator: this._requestIdMediator,
    });
    this._logger.info(
      `request id: ${this._requestId} consumer: ${this.consumerName}(${this.consumerId}) subscribing topic: ${this.topic} subscription: ${this.subscription}`
    );
    await services.subscribe({
      cnx: this._client.getCnx(),
      topic: this.topic,
      subscription: this.subscription,
      subType: this.subType,
      consumerId: this.consumerId,
      consumerName: this.consumerName,
      initialPosition: this.initialPosition,
      readCompacted: this.readCompacted,
      requestId: this._requestId++,
      responseMediator: this._requestIdMediator,
    });
    this.isSubscribed = true;
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
    this._consumerState = state;
    this._logger.info(
      `Changing consumer state -> consumer: ${this.consumerName}(${
        this.consumerId
      }) STATE: ${this.getState()}`
    );
  };

  _flow = async (flowAmount) => {
    await services.flow({
      cnx: this._client.getCnx(),
      flowAmount,
      consumerId: this.consumerId,
      responseMediator: this.noId,
    });
  };

  _cleanState = () => {
    clearTimeout(this._processTimeoutInterval);
    this._client.getResponseEvents().off('message', this._reflow);
    this.isSubscribed = false;
    this.receiveQueue = [];
  };

  unsubscribe = async () => {
    if (!this.isSubscribed) {
      throw new PulsarFlexUnsubscribeError('Consumer is already unsubscribed.');
    }
    this._logger.info(
      `request id: ${this._requestId} consumer: ${this.consumerName}(${this.consumerId}) unsubscribing topic: ${this.topic} subscription: ${this.subscription}`
    );
    this._cleanState();
    await services.unsubscribe({
      cnx: this._client.getCnx(),
      consumerId: this.consumerId,
      requestId: this._requestId++,
      responseMediator: this._requestIdMediator,
    });
    this._logger.info(
      `Closing client connection for consumer: ${this.consumerName}(${this.consumerId})`
    );
    this._client.getCnx().close();
    this._setState(STATES.UNSUBSCRIBED);
  };

  _ack = async ({ messageIdData, ackType }) => {
    try {
      return await services.ack({
        client: this._client,
        consumerId: this.consumerId,
        messageIdData,
        ackType,
        requestId: this._requestId++,
        responseMediator: this._requestIdMediator,
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
              consumerId: this.consumerId,
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
    if (!this.isSubscribed) {
      throw new PulsarFlexNotSubscribedError(
        'You must be subscribed to the topic in order to start consuming messages.'
      );
    }
    this._onMessageParams = { onMessage, autoAck };
    this._setState(STATES.ACTIVE);
    this._client.getResponseEvents().on('message', this._reflow);

    const process = async () => {
      if (!this.isSubscribed) {
        return;
      }
      if (this.receiveQueue.length <= 0) {
        this._processTimeoutInterval = setTimeout(async () => {
          await this._flow(this.receiveQueueSize);
          await process();
        }, 1000);
        return;
      }
      const message = this.receiveQueue.shift();
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
        ack: (options = {}) =>
          this._ack({
            messageIdData: message.command.messageId,
            ackType: options.type ? options.type : ACK_TYPES.INDIVIDUAL,
          }),
      });
      await process();
    };
    await this._flow(this.receiveQueueSize);
    await process();
  };
};
