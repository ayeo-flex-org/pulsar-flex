const { Pulsar, Producer } = require('../src');

(async () => {
  const pulsar = new Pulsar({
    broker: '20.101.147.31:6650',
    timeout: 1000,
  });

  console.log('pulsar');
  const producer = new Producer({
    pulsar,
    topic: 'public/default/galrose',
    producerConfiguration: {},
  });

  console.log('producer');
  await producer.create();
  console.log('created');
  await producer.send({ payload: 'bla' });
  console.log('sent');
  await producer.close();
  console.log('close');
})();
