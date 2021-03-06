const commands = require('../../commands');
const errors = require('../../errors');
const utils = require('../../utils');

const create = async ({
  topic,
  requestId,
  producerId,
  client,
  responseMediator,
  producerAccessMode,
  producerName,
}) => {
  const { sendSimpleCommandRequest } = client.getCnx();
  const createProducer = commands.createProducer({
    topic,
    requestId,
    producerId,
    producerName,
    producerAccessMode,
  });
  const { command } = await sendSimpleCommandRequest({ command: createProducer }, responseMediator);
  if (!utils.isNil(command.error))
    throw new errors.PulsarFlexProducerCreationError({ message: command.message });
  return { command };
};

module.exports = create;
