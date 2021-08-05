const commands = require('../../commands');

const sendBatch = async ({
  producerName,
  sequenceId,
  producerId,
  client,
  responseMediator,
  messages,
}) => {
  const { sendPayloadBatchCommandRequest } = client.getCnx();
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
  return await sendPayloadBatchCommandRequest(
    {
      metadataCommand: messageMetadata,
      command: sendMessages,
      payload,
    },
    responseMediator
  );
};

module.exports = sendBatch;
