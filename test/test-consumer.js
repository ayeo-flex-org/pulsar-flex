const { Pulsar, Consumer } = require('../src');

(async () => {
  const pulsar = new Pulsar({
    broker: '20.101.147.31:6650',
    timeout: 1000,
  });

  const myConsumer = new Consumer({
    client: pulsar,
    topic: 'persistent://public/default/galrose',
    subscription: 'subbon',
    subType: Consumer.SUB_TYPES.EXCLUSIVE,
    consumerName: 'Jerry',
    readCompacted: false,
  });
  await myConsumer.subscribe();
  myConsumer.run({
    onMessage: ({ ack, message, data }) => {
      console.log(message);
      // ack(message.id);
    },
  });
  await myConsumer.flow(5);
})();
