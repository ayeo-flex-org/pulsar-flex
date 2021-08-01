const config = {
  jwt: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.qaYxy5mx1D-JtqAIla91Xbl3en5o-BG4RdNq_nXZZ4A',
  discoveryServers: ['localhost:6650'],
  topic: 'persistent://public/default/test',
  subscription: 'subscription',
  commandConnectedBuffer: Buffer.from([
    0, 0, 0, 35, 0, 0, 0, 31, 8, 3, 26, 27, 10, 18, 80, 117, 108, 115, 97, 114, 32, 83, 101, 114,
    118, 101, 114, 50, 46, 56, 46, 48, 16, 17, 24, 128, 128, 192, 2,
  ]),
  commandMessageBuffer: Buffer.from([]),
  commandBatchMessageBuffer: Buffer.from([]),
  containerName: 'pulsar-standalone-pulsar-flex',
};

module.exports = config;
