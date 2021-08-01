const commands = require('../../commands');
const errors = require('../../errors');
const utils = require('../../utils');

const flow = async ({ cnx, flowAmount, consumerId, responseMediator }) => {
  const commandFlow = commands.flow({
    consumerId,
    messagePermits: flowAmount,
  });
  await cnx.sendSimpleCommandRequest({ command: commandFlow }, responseMediator);
};

module.exports = flow;
