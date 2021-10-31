const commands = require('../../commands');

const sendMessage = async ({
  producerName,
  sequenceId,
  producerId,
  client,
  responseMediator,
  payload,
  properties,
  connected,
  isResend = false,
}) => {
  const { sendPayloadCommandRequest } = client.getCnx();
  const messageMetadata = commands.messageMetadata({
    producerName,
    sequenceId,
    properties,
  });
  const sendMessages = commands.sendMessages({ producerId, sequenceId });
  return await sendPayloadCommandRequest(
    {
      metadataCommand: messageMetadata,
      command: sendMessages,
      payload,
    },
    responseMediator
  );
};

module.exports = sendMessage;
