const commands = require('../../commands');

const sendMessage = ({
  producerName,
  sequenceId,
  producerId,
  cnx,
  responseMediator,
  payload,
  properties,
}) => {
  const { sendPayloadCommandRequest } = cnx;
  const messageMetadata = commands.messageMetadata({
    producerName,
    sequenceId,
    properties,
  });
  const sendMessages = commands.sendMessages({ producerId, sequenceId });
  sendPayloadCommandRequest(
    {
      metadataCommand: messageMetadata,
      command: sendMessages,
      payload,
    },
    responseMediator
  );
};

module.exports = sendMessage;
