const { Pulsar, Producer } = require('../src');

(async () => {
  const pulsar = new Pulsar({
    broker: '192.168.99.100:6650',
    timeout: 1000,
  });

  const producer = new Producer({
    pulsar,
    topic: 'public/default/galrose',
    producerConfiguration: {},
  });

  await producer.create();
  await producer.send({ payload: 'bla' });
  await producer.close();
})();
