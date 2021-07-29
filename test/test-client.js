const { Pulsar } = require('../src');

(async () => {
  const pulsar = new Pulsar({
    serviceDiscovery: '192.168.99.100:6650',
    timeout: 1000,
  });

  await pulsar.connect({ topic: 'persistent://public/default/sinai' });
})();
