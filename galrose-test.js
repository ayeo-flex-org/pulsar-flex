const { Pulsar, Producer } = require('./src');

(async () => {
  const pulsar = new Pulsar({
    discoveryServers: ['localhost:6650'],
    jwt: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.qaYxy5mx1D-JtqAIla91Xbl3en5o-BG4RdNq_nXZZ4A',
    timeout: 1000,
  });
  const producer = new Producer({
    pulsar,
    topic: 'public/default/test',
    producerConfiguration: { producerAccessMode: 'EXCLUSIVE' },
  });
  await producer.create();

  // console.log('sent first');
  const sleep = async () => await new Promise((resolve) => setTimeout(resolve, 10));
  let i = 0;
  while (i < 1000000) {
    await producer.sendMessage({
      payload: 'ayeo',
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
    console.log('sent', i);
    i++;
    await sleep();
  }
  console.log('done');
  await producer.close();
  console.log('close');
})();
