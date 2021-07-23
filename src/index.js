const client = require('./client');

(async () => {
  const configuredClient = client({ broker: 'localhost:6650', timeout: 100 });
  const { responseEmitter, sendSimpleCommandRequest } = configuredClient.connect();
})();
