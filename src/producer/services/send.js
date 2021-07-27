const commands = require('../../commands');

const send =
  ({ getProducerName, getSequenceId, producerId, getClient, setState }) =>
  ({ payload, properties }) => {
    const { responseEmitter, sendPayloadCommandRequest } = getClient();
    const sequenceId = getSequenceId();
    const messageMetadata = commands.messageMetadata({
      producerName: getProducerName(),
      sequenceId,
    });
    const sendMessages = commands.sendMessages({ producerId, numMessages: 1, sequenceId });
    const payloadBuffer = Buffer.from(payload);
    sendPayloadCommandRequest({
      metadataCommand: messageMetadata,
      command: sendMessages,
      payload: payloadBuffer,
    });
    return new Promise((resolve, reject) => {
      responseEmitter.on('sendReceipt', (data) => {
        console.log('sent message');
        setState({ sequenceId: sequenceId + 1 });
        console.log(data);
        resolve();
      });
      responseEmitter.on('sendError', (data) => {
        console.log('send error');
        console.log(data);
        resolve();
      });
    });
  };

module.exports = send;
