const { Pulsar, Producer } = require('../src');

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

(async () => {
  const pulsar = new Pulsar({
    discoveryServers: ['192.168.99.100:6650'],
    timeout: 1000,
  });

  console.log('pulsar');
  const producer = new Producer({
    pulsar,
    topic: 'public/default/galrose',
    producerConfiguration: { producerAccessMode: 'EXCLUSIVE' },
    reconnectTimeout: 10000,
  });
  // const producer1 = new Producer({
  //   pulsar,
  //   topic: 'public/default/galrose',
  //   producerConfiguration: { producerAccessMode: 'EXCLUSIVE' },
  // });

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
  //console.log('sent first');
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    try {
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
    } catch (e) {
      console.log(e);
    }
  }
  //  await producer.close();
  console.log('close');
})();
