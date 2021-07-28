const commands = require('../../commands');

const sendBatch = ({ producerName, sequenceId, producerId, cnx, responseMediator, messages }) => {
  const { sendPayloadBatchCommandRequest } = cnx;
  const numMessages = messages.length;
  const messageMetadata = commands.messageMetadata({
    producerName,
    sequenceId,
    numMessages,
  });
  const sendMessages = commands.sendMessages({ producerId, sequenceId, numMessages });
  const payload = messages.map((message) => ({
    metadata: commands.singleMessageMetadata(message),
    payload: message.payload,
  }));
  return sendPayloadBatchCommandRequest(
    {
      metadataCommand: messageMetadata,
      command: sendMessages,
      payload,
    },
    responseMediator
  );
};

module.exports = sendBatch;
