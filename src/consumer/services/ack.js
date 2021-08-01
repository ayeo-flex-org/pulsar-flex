const commands = require('../../commands');
const errors = require('../../errors');
const utils = require('../../utils');

const ack = async ({ cnx, consumerId, messageIdData, ackType, requestId, responseMediator }) => {
  const commandAck = commands.ack({
    consumerId,
    messageIdData,
    ackType,
    requestId,
  });
  const { command } = await cnx.sendSimpleCommandRequest({ command: commandAck }, responseMediator);
  if (!utils.isNil(command.error)) throw new errors.PulsarFlexAckError(command.message);
};

module.exports = ack;
