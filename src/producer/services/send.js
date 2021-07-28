const commands = require('../../commands');

const send =
  ({ producerName, sequenceId, producerId, client, responseMediator, numMessages = 1 }) =>
  ({ payload, properties }) => {
    const { sendPayloadCommandRequest } = client;
    const messageMetadata = commands.messageMetadata({
      producerName,
      sequenceId,
    });
    const sendMessages = commands.sendMessages({ producerId, numMessages, sequenceId });
    const payloadBuffer = Buffer.from(payload);
    return sendPayloadCommandRequest({
      metadataCommand: messageMetadata,
      command: sendMessages,
      payload: payloadBuffer,
      responseMediator,
    });
  };

module.exports = send;
