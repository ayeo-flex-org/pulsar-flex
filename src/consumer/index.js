const commands = require('../commands');

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
    this.responser = null;

    this.isSubscribed = false;

    this.SUB_TYPES = {
      EXCLUSIVE: 0,
      SHARED: 1,
      FAILOVER: 2,
      KEY_SHARED: 3,
    };
  }

  async subscribe() {
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

    this.client = await this.client.connect();
    this.client.sendSimpleCommandRequest({ command: subscribeCommand });
    this.responser = resolveResponses({
      emitter: this.client.responseEmitter,
      events: ['success', 'error', 'message'],
      func: (data) => console.log(data),
    });
  }

  async flow(msgFlow) {
    const commandFlow = commands.flow({
      consumerId: this.consumerId,
      messagePermits: msgFlow,
    });
    this.client.sendSimpleCommandRequest({ command: commandFlow });
  }

  async ack() {}

  async unsubscribe() {}
};
