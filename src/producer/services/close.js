const commands = require('../../commands');
const utils = require('../../utils');
const errors = require('../../errors');

const close = async ({ producerId, cnx, requestId, responseMediator }) => {
  const { sendSimpleCommandRequest } = cnx;
  const closeProducer = commands.closeProducer({ producerId, requestId });
  const { command } = await sendSimpleCommandRequest({ command: closeProducer }, responseMediator);
  if (!utils.isNil(command.error)) throw new errors.PulsarFlexProducerCloseError(command.message);
};

module.exports = close;
