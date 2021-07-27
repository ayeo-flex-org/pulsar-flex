const client = require('./client');

(async () => {
  const configuredClient = client({
    broker: 'localhost:6650',
    timeout: 100,
    jwt: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.ZYtTkTL5jf6kbswRG6MNltdSMu1izrJIwVNsc4elGrA',
  });
  const { responseEmitter, sendSimpleCommandRequest } = configuredClient.connect();
})();
