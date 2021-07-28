const commands = require('../../commands');

const send =
  ({ producerName, sequenceId, producerId, client, numMessages = 1 }) =>
  ({ payload, properties }) => {
    const { responseEmitter, sendPayloadCommandRequest } = client;
    const messageMetadata = commands.messageMetadata({
      producerName,
      sequenceId,
    });
    const sendMessages = commands.sendMessages({ producerId, numMessages, sequenceId });
    const payloadBuffer = Buffer.from(payload);
    sendPayloadCommandRequest({
      metadataCommand: messageMetadata,
      command: sendMessages,
      payload: payloadBuffer,
    });
    return new Promise((resolve, reject) => {
      responseEmitter.on('sendReceipt', (data) => {
        resolve();
      });
      responseEmitter.on('sendError', () => {
        resolve();
      });
    });
  };

module.exports = send;
