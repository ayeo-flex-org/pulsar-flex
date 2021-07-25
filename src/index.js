const client = require('./client');

(async () => {
  const configuredClient = client({
    broker: '192.168.99.100:6650',
    timeout: 100,
    jwt: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.uLA81lDfy7qpGJ2Bu6cJcTEvISPGlTsyxdiCqgewuYs',
  });
  const { responseEmitter, sendSimpleCommandRequest } = configuredClient.connect();
})();
