const commands = require('../commands');
const responseMediators = require('../responseMediators');
const SUB_TYPES = {
  EXCLUSIVE: 0,
  SHARED: 1,
  FAILOVER: 2,
  KEY_SHARED: 3,
};

module.exports = class Consumer {
  constructor({ client, topic, subscription, subType, consumerName, readCompacted }) {
    this.client = client;
    this.topic = topic;
    this.subscription = subscription;
    this.subType = subType;
    this.consumerName = consumerName;
    this.readCompacted = readCompacted;
    this.consumerId = 0;
    this.requestId = 0;

    this.subscribeResponseMediator = new responseMediators.RequestIdResponseMediator({
      client,
      commands: ['success', 'error'],
    });
    this.noId = new responseMediators.NoIdResponseMediator({
      client,
      commands: ['message'],
    });

    this.isSubscribed = false;
  }

  static get SUB_TYPES() {
    return SUB_TYPES;
  }

  async subscribe() {
    await this.client.connect();

    // naming validations
    const subscribeCommand = commands.subscribe({
      topic: this.topic,
      subscription: this.subscription,
      subType: this.subType,
      consumerId: this.consumerId,
      consumerName: this.consumerName,
      readCompacted: this.readCompacted,
      requestId: this.requestId,
    });
    const a = await this.client
      .getCnx()
      .sendSimpleCommandRequest({ command: subscribeCommand }, this.subscribeResponseMediator);
    console.log(a);
  }

  async flow(msgFlow) {
    const commandFlow = commands.flow({
      consumerId: this.consumerId,
      messagePermits: msgFlow,
    });
    await this.client.getCnx().sendSimpleCommandRequest({ command: commandFlow }, this.noId);
  }

  async unsubscribe() {}

  async ack(message) {}

  async run({ onMessage }) {
    const x = this.client.getResponseEvents();
    x.on('message', (data) => {
      console.log(data);
    });
  }
};
