const commands = require('../../commands');

const create = async ({ topic, requestId, producerId, client, setPromisePool }) => {
  const { sendSimpleCommandRequest, responseEmitter } = client;
  const createProducer = commands.createProducer({
    topic,
    requestId,
    producerId,
  });
  sendSimpleCommandRequest({ command: createProducer });
  return new Promise((resolve, reject) => {
    responseEmitter.on('producerSuccess', (data) => {
      const { lastSequenceId, producerName } = data.command;
      const sequenceId = lastSequenceId + 1;
      resolve({ producerName, sequenceId });
    });
    responseEmitter.on('error', () => {
      resolve('failed to create producer');
    });
  });
};

module.exports = create;
