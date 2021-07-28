const { Pulsar, Consumer } = require('../src');

(async () => {
  const pulsar = new Pulsar({
    broker: 'localhost:6650',
    timeout: 1000,
  });

  const myConsumer = new Consumer({
    client: pulsar,
    topic: 'persistent://public/default/consumerron3',
    subscription: 'subbon',
    subType: Consumer.SUB_TYPES.EXCLUSIVE,
    consumerName: 'Jerry',
    readCompacted: false,
  });
  await myConsumer.subscribe();
  myConsumer.run({
    onMessage: ({ ack, message, data }) => {
      // ack(message.id);
    },
  });
  await myConsumer.flow(1000);
})();
