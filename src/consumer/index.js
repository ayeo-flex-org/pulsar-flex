const responseMediators = require('../responseMediators');
const services = require('./services');
const Pulsar = require('../client');
const { PulsarFlexNotSubscribedError, PulsarFlexSubscribeError, PulsarFlexUnsubscribeError } = require('../errors');
const pulsarApi = require('../commands/protocol/pulsar/pulsar_pb');
const { createLogger, LEVELS } = require('../logger');
const defaultLogger = require('../logger/default');

const SUB_TYPES = pulsarApi.CommandSubscribe.SubType;
const ACK_TYPES = pulsarApi.CommandAck.AckType;
const INITIAL_POSITION = pulsarApi.CommandSubscribe.InitialPosition;
const STATES = {
  ACTIVE: 'ACTIVE', // Subscribed and consuming messages
  INACTIVE: 'INACTIVE', // Subscribed but not consuming messages
  UNSUBSCRIBED: 'UNSUBSCRIBED', // Not subscribed
  RECONNECTING: 'RECONNECTING', // ???
}

module.exports = class Consumer {
  constructor({
    discoveryServers,
    jwt,
    topic,
    subscription,
    subType,
    consumerName,
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
      logger: this._logger
    });
    this.topic = topic;
    this.subscription = subscription;
    this.subType = subType;
    this.consumerName = consumerName;
    this.readCompacted = readCompacted;
    this.initialPosition = initialPosition;
    this.consumerId = 0;
    this.receiveQueueSize = receiveQueueSize;
    this.reconnectInterval = reconnectInterval;
    
    this._requestId = 0;
    this._curFlow = receiveQueueSize;
    this._consumerState = STATES.UNSUBSCRIBED;
    this._redeliverAcksQueue = []
    
    this._onMessageParams = {};

    this.receiveQueue = [];

    this._requestIdMediator = new responseMediators.RequestIdResponseMediator({
      client: this._client,
      commands: ['success', 'error', 'ackresponse'],
    });
    this.noId = new responseMediators.NoIdResponseMediator({
      client: this._client,
      commands: ['message'],
    });

    this.isSubscribed = false;
    this._reflow = async (data) => {
      this.receiveQueue.push(data);
      const nextFlow = Math.ceil(this.receiveQueueSize / 2);
      if (--this._curFlow <= nextFlow) {
        this._curFlow += nextFlow;
        await this._flow(nextFlow);
      }
    };
    services.redeliverAcks(this._client, this._redeliverAcksQueue)
  }

  static get SUB_TYPES() {
    return SUB_TYPES;
  }

  static get ACK_TYPES() {
    return ACK_TYPES;
  }

  static get INITIAL_POSITION () {
    return INITIAL_POSITION;
  }

  static get CONSUMER_STATES () {
    return STATES;
  }

  subscribe = async () => {
    if(this.isSubscribed) {
      throw new PulsarFlexSubscribeError('Consumer is already subscribed.')
    }
    this._logger.info(`Creating client connection for consumer: ${this.consumerName}(${this.consumerId})`)
    await this._client.connect({ topic: this.topic });

    // Handles forceful & graceful shutdowns.
    this._logger.info(`Setting up connection failure...`)
    services.connectionFailure({
      client: this._client,
      subscribe: this.subscribe,
      cleanState: this._cleanState,
      consumerState: {
        get: this.getState,
        set: this._setState,
        states: Consumer.CONSUMER_STATES
      },
      intervalMs: this.reconnectInterval,
      responseMediator: this._requestIdMediator,
    })
    this._logger.info(`request id: ${this._requestId} consumer: ${this.consumerName}(${this.consumerId}) subscribing topic: ${this.topic} subscription: ${this.subscription}`)
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
    if(this.getState() === STATES.RECONNECTING) {
      await this.run(this._onMessageParams);
    }
    else {
      this._setState(STATES.INACTIVE);
    }
  };

  getState = () => {
    return this._consumerState;
  }

  _setState = (state) => {
    this._consumerState = state;
    this._logger.info(`Changing consumer state -> consumer: ${this.consumerName}(${this.consumerId}) STATE: ${this.getState()}`)
  }

  _flow = async (flowAmount) => {
    await services.flow({
      cnx: this._client.getCnx(),
      flowAmount,
      consumerId: this.consumerId,
      responseMediator: this.noId,
    });
  };

  _cleanState = () => {
    this._client.getResponseEvents().off('message', this._reflow);
    this.isSubscribed = false;
    this.receiveQueue = [];
  }

  unsubscribe = async () => {
    if(!this.isSubscribed) {
      throw new PulsarFlexUnsubscribeError('Consumer is already unsubscribed.')
    }
    this._logger.info(`request id: ${this._requestId} consumer: ${this.consumerName}(${this.consumerId}) unsubscribing topic: ${this.topic} subscription: ${this.subscription}`)
    await services.unsubscribe({
      cnx: this._client.getCnx(),
      consumerId: this.consumerId,
      requestId: this._requestId++,
      responseMediator: this._requestIdMediator,
    });
    this._setState(STATES.UNSUBSCRIBED);
    this._logger.info(`Closing client connection for consumer: ${this.consumerName}(${this.consumerId})`)
    this._client.getCnx().close(); 
    this._cleanState();
  }

  _ack = async ({ messageIdData, ackType }) => {
    try {
      return await services.ack({
        cnx: this._client.getCnx(),
        consumerId: this.consumerId,
        messageIdData,
        ackType,
        requestId: this._requestId++,
        responseMediator: this._requestIdMediator,
      });
    }
    catch (e) {
      console.log(e);
      await new Promise((resolve, reject) => {
        console.log('sent to redeliver');
        this._redeliverAcksQueue.push({
          func: () => services.ack({
            cnx: this._client.getCnx(),
            consumerId: this.consumerId,
            messageIdData,
            ackType,
            requestId: this._requestId++,
            responseMediator: this._requestIdMediator,
          }),
          resolve,
        })
      })
    }
  };

  run = async ({ onMessage = null, autoAck = true }) => {
    if (this.isSubscribed) {
      this._onMessageParams = {onMessage, autoAck}
      this._setState(STATES.ACTIVE);
      this._client.getResponseEvents().on('message', this._reflow);

      const process = async () => {
        if (!this.isSubscribed) return;
        const message = this.receiveQueue.shift();
        if (autoAck) {
          await this._ack({
            messageIdData: message.command.messageId,
            ackType: ACK_TYPES.INDIVIDUAL,
          });
        }
        await onMessage({
          message: message.payload.toString(),
          metadata: message.metadata,
          command: message.command,
          ack: (options={}) => this._ack({  messageIdData: message.command.messageId, ackType: options.type ? options.type : ACK_TYPES.INDIVIDUAL}),
        });
        if (this.receiveQueue.length > 0) process();
        else setTimeout(process, 1000);
      };

      await this._flow(this.receiveQueueSize);
      process();
    } else {
      throw new PulsarFlexNotSubscribedError(
        'You must be subscribed to the topic in order to start consuming messages.'
      );
    }
  };
};
