const { Pulsar, Consumer } = require('../src');

(async () => {
  const pulsar = new Pulsar({
    discoveryServers: ['localhost:6650'],
    timeout: 1000,
  });

  const myConsumer = new Consumer({
    client: pulsar,
    topic: 'persistent://public/default/consumerron3',
    subscription: 'subbon',
    subType: Consumer.SUB_TYPES.EXCLUSIVE,
    consumerName: 'Jerry',
    receiveQueueSize: 1,
  });
  await myConsumer.subscribe();
  myConsumer.run({
    onMessage: ({ ack, message, data }) => {
      console.log(message);
    },
  });
})();
