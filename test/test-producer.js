const { Pulsar, Producer } = require('../src');

(async () => {
  const pulsar = new Pulsar({
    broker: 'localhost:6650',
    timeout: 1000,
  });

  console.log('pulsar');
  const producer = new Producer({
    pulsar,
    topic: 'public/default/consumerron3',
    producerConfiguration: { producerAccessMode: 'EXCLUSIVE' },
  });

  console.log('producer');
  await producer.create();
  console.log('created');
  await producer.sendMessage({
    payload: 'single',
    properties: { galrose: 'flex', sinai: 'noob' },
  });
  // await producer.sendBatch({
  //   messages: [
  //     {
  //       payload: 'bla',
  //       properties: { galrose: 'flex', sinai: 'noob' },
  //     },
  //     {
  //       payload: 'ayeo',
  //       properties: { galrose: 'flex', sinai: 'noob' },
  //     },
  //     {
  //       payload: 'flex',
  //       properties: { galrose: 'flex', sinai: 'noob' },
  //     },
  //     {
  //       payload: 'dude',
  //       properties: { galrose: 'flex', sinai: 'noob' },
  //     },
  //   ],
  // });
  console.log('sent');
  await producer.close();
  console.log('close');
})();
