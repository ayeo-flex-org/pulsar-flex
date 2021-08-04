const commands = require('../../commands');
const errors = require('../../errors');
const utils = require('../../utils');

const ack = async ({ client, consumerId, messageIdData, ackType, requestId, responseMediator }) => {
  const commandAck = commands.ack({
    consumerId,
    messageIdData,
    ackType,
    requestId,
  });
  const { command } = await client
    .getCnx()
    .sendSimpleCommandRequest({ command: commandAck }, responseMediator);
  if (!utils.isNil(command.error)) throw new errors.PulsarFlexAckError(command.message);
  return command;
};

module.exports = ack;
