const { Pulsar, Consumer } = require('../src');

(async () => {
  const pulsar = new Pulsar({
    broker: 'localhost:6650',
    timeout: 1000,
  });

  const myConsumer = new Consumer({
    client: pulsar,
    topic: 'persistent://public/default/consumeron',
    subscription: 'subbon',
    subType: Consumer.SUB_TYPES.EXCLUSIVE,
    
  });

  await pulsar.connect();
})();
