const commands = require('../commands');
const responseMediators = require('../responseMediators');
const services = require('./services');

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
    client,
    topic,
    subscription,
    subType,
    consumerName,
    readCompacted = false,
    receiveQueueSize = 500,
  }) {
    this.client = client;
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

    this.subscribeResponseMediator = new responseMediators.RequestIdResponseMediator({
      client,
      commands: ['success', 'error'],
    });
    this.noId = new responseMediators.NoIdResponseMediator({
      client,
      commands: ['message'],
    });

    this.ackResponse = new responseMediators.RequestIdResponseMediator({
      client,
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

  async subscribe() {
    await this.client.connect({ topic: this.topic });
    await services.subscribe({
      topic: this.topic,
      subscription: this.subscription,
      subType: this.subType,
      consumerId: this.consumerId,
      consumerName: this.consumerName,
      readCompacted: this.readCompacted,
      requestId: this.requestId++,
      responseMediator: this.subscribeResponseMediator,
    });
  }

  flow = async (flowSize) => {
    const commandFlow = commands.flow({
      consumerId: this.consumerId,
      messagePermits: flowSize,
    });
    await this.client.getCnx().sendSimpleCommandRequest({ command: commandFlow }, this.noId);
  };

  async unsubscribe() {}

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
      // console.log(this.receiveQueue);
      console.log(data.payload.toString());
      if (autoAck) {
        await this._ack({ messageIdData: data.command.messageId, ackType: ACK_TYPES.INDIVIDUAL });
      }
      if (--this.curFlow === 0) {
        this.curFlow = this.receiveQueueSize;
        await this.flow(this.receiveQueueSize);
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
    });

    await this.flow(this.receiveQueueSize);
  };
};
