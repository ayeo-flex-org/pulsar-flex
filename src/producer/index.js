const commands = require('../commands');

const producer = async ({ clientHandler, topic, producerConfiguration }) => {
  // fix the producer ID
  const { producerName = 'pulsar-flex' } = producerConfiguration;
  const { sendSimpleCommandRequest, responseEmitter, sendPayloadCommandRequest } = clientHandler;
  const requestId = 1;
  const producerId = 1;
  let sequenceId = 0;
  const createProducer = commands.createProducer({ topic, requestId, producerName, producerId });
  sendSimpleCommandRequest({ command: createProducer });

  const send = () => {
    const sequenceId = 1;
    const messageMetadata = commands.messageMetadata({ producerName, sequenceId });
    const sendMessages = commands.sendMessages({ producerId, numMessages: 1, sequenceId: 0 });
    const payload = Buffer.from('bla');
    sendPayloadCommandRequest({
      metadataCommand: messageMetadata,
      command: sendMessages,
      payload: payload,
    });
    return new Promise((resolve, reject) => {
      responseEmitter.on('success', (data) => {
        console.log(data);
      });
      responseEmitter.on('error', (data) => {
        console.log(data);
      });
      responseEmitter.on('sendReceipt', (data) => {
        console.log(data);
      });
      responseEmitter.on('sendError', (data) => {
        console.log(data);
      });
    });
  };

  const close = () => {
    const producerId = 1;
    const requestId = 2;
    const closeProducer = commands.closeProducer({ producerId, requestId });
    sendSimpleCommandRequest({ command: closeProducer });
    return new Promise((resolve, reject) => {
      responseEmitter.on('success', (data) => {
        data.command.requestId === requestId && resolve(data);
      });
      responseEmitter.on('error', () => {
        resolve('failed to close producer');
      });
    });
  };

  return new Promise((resolve, reject) => {
    responseEmitter.on('producerSuccess', (data) => {
      console.log(data);
      sequenceId = data.command.lastSequenceId + 1;
      resolve({ close, send });
    });
    responseEmitter.on('error', () => {
      resolve('failed to create producer');
    });
  });
};

module.exports = producer;
