const { Pulsar, Consumer } = require('../src');

(async () => {
  const pulsar = new Pulsar({
    broker: '20.101.147.31:6650',
    timeout: 1000,
  });

  const myConsumer = new Consumer({
    client: pulsar,
    topic: 'persistent://public/default/consumeron',
    subscription: 'subbon',
    subType: Consumer.SUB_TYPES.EXCLUSIVE,
    consumerName: 'Jerry',
    receiveQueueSize: 1,
  });
  await myConsumer.subscribe();
  myConsumer.run({
    onMessage: ({ ack, message, data }) => {
      // console.log('process');
    },
  });
})();
