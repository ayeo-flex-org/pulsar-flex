const commands = require('../../commands');
const errors = require('../../errors');
const utils = require('../../utils');

const create = async ({
  topic,
  requestId,
  producerId,
  cnx,
  responseMediator,
  producerConfiguration,
  producerName,
}) => {
  const { sendSimpleCommandRequest } = cnx;
  const createProducer = commands.createProducer({
    topic,
    requestId,
    producerId,
    producerName,
    ...producerConfiguration,
  });
  const { command } = await sendSimpleCommandRequest({ command: createProducer }, responseMediator);
  if (!utils.isNil(command.error))
    throw new errors.PulsarFlexProducerCreationError({ message: command.message });
  return { command };
};

module.exports = create;
