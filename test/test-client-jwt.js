const { client, producer } = require('../src');

(async () => {
  const pulsar = client({
    broker: '192.168.99.100:6650',
    jwt: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.U2UJ2u_stC58QdNsGOvpfZ44-i7Ckr_lx0qL2GVoEgM',
    timeout: 1000,
  });

  await pulsar.connect();
})();
