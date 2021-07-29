const { Pulsar } = require('../src');

(async () => {
  const pulsar = new Pulsar({
    discoveryServers: ['blabla:6650', 'localhost:6650', '192.168.99.100:6650'],
    timeout: 1000,
  });

  await pulsar.connect({ topic: 'persistent://public/default/sinai' });
})();
