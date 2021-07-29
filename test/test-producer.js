const { Pulsar, Producer } = require('../src');

(async () => {
  const pulsar = new Pulsar({
    discoveryServers: ['blabla:6650', 'localhost:6650', '20.101.147.31:6650'],
    timeout: 1000,
  });

  console.log('pulsar');
  const producer = new Producer({
    pulsar,
    topic: 'public/default/galrose',
    producerConfiguration: { producerAccessMode: 'EXCLUSIVE' },
  });
  const producer1 = new Producer({
    pulsar,
    topic: 'public/default/galrose',
    producerConfiguration: { producerAccessMode: 'EXCLUSIVE' },
  });

  console.log('producer');
  await producer.create();
  // try {
  //   await producer1.create();
  // } catch (e) {
  //   console.log(e);
  // }
  console.log('created');
  // await producer.sendMessage({
  //   properties: { galrose: 'flex', sinai: 'noob' },
  // });
  console.log('sent first');
  while (true) {
    await producer.sendBatch({
      messages: [
        {
          payload: 'bla',
          properties: { galrose: 'flex', sinai: 'noob' },
        },
        {
          payload: 'ayeo',
          properties: { galrose: 'flex', sinai: 'noob' },
        },
        {
          payload: 'flex',
          properties: { galrose: 'flex', sinai: 'noob' },
        },
        {
          payload: 'dude',
          properties: { galrose: 'flex', sinai: 'noob' },
        },
      ],
    });
  }
  await producer.close();
  await producer1.close();
  console.log('close');
})();
