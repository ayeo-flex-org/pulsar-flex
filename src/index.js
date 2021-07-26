const client = require('./client');
const producer = require('./producer');

(async () => {
  const configuredClient = client({ broker: '20.101.147.31:6650', timeout: 1000 });
  const clientHandler = await configuredClient.connect();
  console.log('connected');
  const producer1 = await producer({
    clientHandler,
    topic: 'persistent://public/default/galrose',
    producerConfiguration: {},
  });
  await producer1.send();
  console.log('sent');
  await producer1.close();
})();
