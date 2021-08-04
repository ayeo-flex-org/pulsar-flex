const commands = require('../../commands');
const errors = require('../../errors');
const utils = require('../../utils');

const closeConsumer = async ({ cnx, consumerId, requestId, responseMediator }) => {
  const closeConsumerCommand = commands.closeConsumer({
    consumerId,
    requestId,
    responseMediator,
  });
  const { command } = await cnx.sendSimpleCommandRequest(
    { command: closeConsumerCommand },
    responseMediator
  );
  if (!utils.isNil(command.error)) throw new errors.PulsarFlexUnsubscribeError(command.message);
  return { command };
};

module.exports = closeConsumer;
