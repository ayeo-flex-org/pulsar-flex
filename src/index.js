const client = require('./client');
const producer = require('./producer');

(async () => {
  const configuredClient = client({ broker: '20.101.147.31:6650', timeout: 100 });
  const clientHandler = configuredClient.connect();
  // const producer1 = producer({
  //   clientHandler,
  //   topic: 'persistent://galrose/flex-mix-dev/namespace/topic',
  //   producerConfiguration: {},
  // });
})();
