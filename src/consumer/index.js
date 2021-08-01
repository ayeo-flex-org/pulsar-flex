const commands = require('../commands');
const responseMediators = require('../responseMediators');
const services = require('./services');
const Pulsar = require('../client');

const SUB_TYPES = {
  EXCLUSIVE: 0,
  SHARED: 1,
  FAILOVER: 2,
  KEY_SHARED: 3,
};

const ACK_TYPES = {
  INDIVIDUAL: 0,
  CUMULATIVE: 1,
};

module.exports = class Consumer {
  constructor({
    discoveryServers,
    jwt,
    topic,
    subscription,
    subType,
    consumerName,
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
    this.consumerId = 0;
    this.requestId = 0;
    this.receiveQueueSize = receiveQueueSize;
    this.curFlow = receiveQueueSize;

    this.receiveQueue = [];

    this.subscribeUnsubscribeResponseMediator = new responseMediators.RequestIdResponseMediator({
      client: this.client,
      commands: ['success', 'error'],
    });
    this.noId = new responseMediators.NoIdResponseMediator({
      client: this.client,
      commands: ['message'],
    });

    this.ackResponse = new responseMediators.RequestIdResponseMediator({
      client: this.client,
      commands: ['ackresponse'],
    });

    this.isSubscribed = false;
  }

  static get SUB_TYPES() {
    return SUB_TYPES;
  }

  static get ACK_TYPES() {
    return ACK_TYPES;
  }

  subscribe = async () => {
    await this.client.connect({ topic: this.topic });
    await services.subscribe({
      cnx: this.client.getCnx(),
      topic: this.topic,
      subscription: this.subscription,
      subType: this.subType,
      consumerId: this.consumerId,
      consumerName: this.consumerName,
      readCompacted: this.readCompacted,
      requestId: this.requestId++,
      responseMediator: this.subscribeUnsubscribeResponseMediator,
    });
  }

  _flow = async (flowAmount) => {
    await services.flow({cnx: this.client.getCnx(), flowAmount, consumerId: this.consumerId, responseMediator: this.noId});
  };

  unsubscribe = async () => {
    await services.unsubscribe({
      cnx: this.client.getCnx(),
      consumerId: this.consumerId,
      requestId: this.requestId++,
      responseMediator: this.subscribeUnsubscribeResponseMediator,
    });
  }

  _ack = async ({ messageIdData, ackType }) => {
    const commandAck = commands.ack({
      consumerId: this.consumerId,
      messageIdData,
      ackType,
      requestId: this.requestId++,
    });
    await this.client.getCnx().sendSimpleCommandRequest({ command: commandAck }, this.ackResponse);
  };

  run = async ({ onMessage = null, autoAck = true }) => {
    this.client.getResponseEvents().on('message', async (data) => {
      this.receiveQueue.push(data);
      if (autoAck) {
        await this._ack({ messageIdData: data.command.messageId, ackType: ACK_TYPES.INDIVIDUAL });
      }
      onMessage({
        message: data.payload.toString(),
        metadata: data.metadata,
        command: data.command,
        ack: (specifiedAckType) =>
          this._ack({
            messageIdData: data.command.messageId,
            ackType: specifiedAckType ? specifiedAckType : ACK_TYPES.INDIVIDUAL,
          }),
      });
      if (--this.curFlow === 0) {
        this.curFlow = this.receiveQueueSize;
        await this._flow(this.receiveQueueSize);
      }
      
    });

    await this._flow(this.receiveQueueSize);
  };
};
