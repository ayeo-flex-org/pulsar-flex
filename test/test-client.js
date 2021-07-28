const { Pulsar } = require('../src');

(async () => {
  const pulsar = new Pulsar({
    broker: 'localhost:6650',
    timeout: 1000,
  });

  await pulsar.connect();
})();
