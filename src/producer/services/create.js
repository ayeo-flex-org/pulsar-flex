const commands = require('../../commands');

const create = async ({ topic, requestId, producerId, cnx, responseMediator }) => {
  const { sendSimpleCommandRequest } = cnx;
  const createProducer = commands.createProducer({
    topic,
    requestId,
    producerId,
  });
  return sendSimpleCommandRequest({ command: createProducer }, responseMediator);
};

module.exports = create;
