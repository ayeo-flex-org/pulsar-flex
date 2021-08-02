const commands = require('../../commands');
const errors = require('../../errors');
const utils = require('../../utils');

const flow = async ({ cnx, flowAmount, consumerId, responseMediator }) => {
  const commandFlow = commands.flow({
    consumerId,
    messagePermits: flowAmount,
  });
  const { command } = await cnx.sendSimpleCommandRequest(
    { command: commandFlow },
    responseMediator
  );
  if (!utils.isNil(command.error)) throw new errors.PulsarFlexFlowError(command.message);
};

module.exports = flow;
