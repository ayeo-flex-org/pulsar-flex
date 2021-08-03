const responseMediators = require('../responseMediators');
const services = require('./services');
const Pulsar = require('../client');
const { PulsarFlexNotSubscribedError } = require('../errors');
const pulsarApi = require('../commands/protocol/pulsar/pulsar_pb');

const SUB_TYPES = pulsarApi.CommandSubscribe.SubType;
const ACK_TYPES = pulsarApi.CommandAck.AckType;
const INITIAL_POSITION = pulsarApi.CommandSubscribe.InitialPosition;

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
  }) {
    this.client = new Pulsar({
      discoveryServers,
      jwt,
    });
    this.topic = topic;
    this.subscription = subscription;
    this.subType = subType;
    this.consumerName = consumerName;
    this.readCompacted = readCompacted;
    this.initialPosition = initialPosition;
    this.consumerId = 0;
    this._requestId = 0;
    this.receiveQueueSize = receiveQueueSize;
    this._curFlow = receiveQueueSize;

    this.receiveQueue = [];

    this._requestIdMediator = new responseMediators.RequestIdResponseMediator({
      client: this.client,
      commands: ['success', 'error', 'ackresponse'],
    });
    this.noId = new responseMediators.NoIdResponseMediator({
      client: this.client,
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
    
    // graceful shutdown
  }

  static get SUB_TYPES() {
    return SUB_TYPES;
  }

  static get ACK_TYPES() {
    return ACK_TYPES;
  }

  subscribe = async () => {
    await this.client.connect({ topic: this.topic });
    // forceful shutdown
    this.client.getCnx()
    .addCleanUpListener(async () => await services.reconnect(this.subscribe, this._cleanState));
    await services.subscribe({
      cnx: this.client.getCnx(),
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
  };

  _flow = async (flowAmount) => {
    await services.flow({
      cnx: this.client.getCnx(),
      flowAmount,
      consumerId: this.consumerId,
      responseMediator: this.noId,
    });
  };

  _cleanState = () => {
    this.client.getResponseEvents().off('message', this._reflow);
    this.isSubscribed = false;
    this.receiveQueue = [];
  }

  unsubscribe = async () => {
    await services.unsubscribe({
      cnx: this.client.getCnx(),
      consumerId: this.consumerId,
      requestId: this._requestId++,
      responseMediator: this._requestIdMediator,
    });
    this._cleanState();
  }

  _ack = ({ messageIdData, ackType }) => {
    return services.ack({
      cnx: this.client.getCnx(),
      consumerId: this.consumerId,
      messageIdData,
      ackType,
      requestId: this._requestId++,
      responseMediator: this._requestIdMediator,
    });
  };

  run = async ({ onMessage = null, autoAck = true }) => {
    if (this.isSubscribed) {
      this.client.getResponseEvents().on('message', this._reflow);

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
      throw PulsarFlexNotSubscribedError(
        'You must be subscribed to the topic in order to start consuming messages.'
      );
    }
  };
};
