const commands = require('../../commands');
const errors = require('../../errors');
const utils = require('../../utils');

const flow = async ({ flowAmount, consumerId, responseMediator }) => {
  const commandFlow = commands.flow({
    consumerId,
    messagePermits: flowAmount,
  });
  await this.client.getCnx().sendSimpleCommandRequest({ command: commandFlow }, responseMediator);
};

module.exports = flow;
