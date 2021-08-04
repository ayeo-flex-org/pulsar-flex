const config = {
  jwt: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.qaYxy5mx1D-JtqAIla91Xbl3en5o-BG4RdNq_nXZZ4A',
  discoveryServers: ['localhost:6650'],
  topic: 'persistent://public/default/test',
  subscription: 'subscription',
  producerConfiguration: { producerAccessMode: 'EXCLUSIVE' },
  commandConnectedBuffer: Buffer.from([
    0, 0, 0, 35, 0, 0, 0, 31, 8, 3, 26, 27, 10, 18, 80, 117, 108, 115, 97, 114, 32, 83, 101, 114,
    118, 101, 114, 50, 46, 56, 46, 48, 16, 17, 24, 128, 128, 192, 2,
  ]),
  commandBatchMessageBuffer: Buffer.from([
    0, 0, 0, 83, 0, 0, 0, 23, 8, 9, 74, 19, 8, 0, 18, 15, 8, 10, 16, 3, 24, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 1, 14, 1, 35, 213, 226, 232, 0, 0, 0, 33, 10, 14, 115, 116, 97, 110, 100,
    97, 108, 111, 110, 101, 45, 48, 45, 49, 16, 0, 24, 166, 215, 152, 137, 176, 47, 88, 1, 130, 1,
    0, 192, 1, 0, 0, 0, 0, 4, 24, 5, 64, 0, 104, 101, 108, 108, 111,
  ]),
  commandMessageBuffer: Buffer.from([
    0, 0, 0, 83, 0, 0, 0, 23, 8, 9, 74, 19, 8, 0, 18, 15, 8, 10, 16, 3, 24, 255, 255, 255, 255, 255,
    255, 255, 255, 255, 1, 14, 1, 35, 213, 226, 232, 0, 0, 0, 33, 10, 14, 115, 116, 97, 110, 100,
    97, 108, 111, 110, 101, 45, 48, 45, 49, 16, 0, 24, 166, 215, 152, 137, 176, 47, 88, 1, 130, 1,
    0, 192, 1, 0, 0, 0, 0, 4, 24, 5, 64, 0, 104, 101, 108, 108, 111,
  ]),
  containerName: 'pulsar-standalone-pulsar-flex',
};

module.exports = config;
