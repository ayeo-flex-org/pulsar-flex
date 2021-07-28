const commands = require('../../commands');

const create = async ({
  topic,
  requestId,
  producerId,
  cnx,
  responseMediator,
  producerConfiguration,
}) => {
  const { sendSimpleCommandRequest } = cnx;
  const createProducer = commands.createProducer({
    topic,
    requestId,
    producerId,
    ...producerConfiguration,
  });
  return sendSimpleCommandRequest({ command: createProducer }, responseMediator);
};

module.exports = create;
