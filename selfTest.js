const pulsar = require('./src');

(async () => {
  const configuredClient = pulsar.client({ broker: '20.101.147.31:6650', timeout: 1000 });
  console.log('configured');
  const producer1 = await pulsar.producer({
    client: configuredClient,
    topic: 'persistent://public/default/galrose',
    producerConfiguration: {},
  });
  await producer1.create();
  console.log('created');
  await producer1.send({ payload: `bla` });
  await producer1.send({ payload: `bla` });
  await producer1.send({ payload: `bla` });
  await producer1.send({ payload: `bla` });
  await producer1.send({ payload: `bla` });
  await producer1.send({ payload: `bla` });
  await producer1.send({ payload: `bla` });
  await producer1.send({ payload: `bla` });
  await producer1.send({ payload: `bla` });

  await producer1.close();
})();
