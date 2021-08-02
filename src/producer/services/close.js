const commands = require('../../commands');
const utils = require('../../utils');
const errors = require('../../errors');

const close = async ({ producerId, client, connected, requestId, responseMediator }) => {
  if (!connected)
    throw new errors.PulsarFlexProducerCloseError({
      message: 'Cannot close not connected producer',
    });

  const { sendSimpleCommandRequest } = client.getCnx();
  const closeProducer = commands.closeProducer({ producerId, requestId });
  const { command } = await sendSimpleCommandRequest({ command: closeProducer }, responseMediator);
  if (!utils.isNil(command.error))
    throw new errors.PulsarFlexProducerCloseError({ message: command.message });
};

module.exports = close;
