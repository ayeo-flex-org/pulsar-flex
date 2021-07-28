const commands = require('../../commands');

const send = ({
  producerName,
  sequenceId,
  producerId,
  cnx,
  responseMediator,
  payload,
  properties,
  numMessages = 1,
}) => {
  const { sendPayloadCommandRequest } = cnx;
  const messageMetadata = commands.messageMetadata({
    producerName,
    sequenceId,
  });
  const sendMessages = commands.sendMessages({ producerId, numMessages, sequenceId });
  return sendPayloadCommandRequest(
    {
      metadataCommand: messageMetadata,
      command: sendMessages,
      payload,
    },
    responseMediator
  );
};

module.exports = send;
