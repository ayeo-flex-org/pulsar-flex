const client = require('./client');

(async () => {
  const configuredClient = client({ broker: '192.168.99.100:6650', timeout: 100 });
  const { responseEmitter, sendSimpleCommandRequest } = configuredClient.connect();
})();
