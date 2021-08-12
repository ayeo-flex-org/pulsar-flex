const commands = require('../../commands');
const errors = require('../../errors');
const utils = require('../../utils');

const ack = async ({ client, consumerId, messageIdData, ackType, requestId, responseMediator }) => {
  const cnx = await client.getCnx();
  if (ackType > 0) {
    const commandAck = commands.ack({
      consumerId,
      messageIdData,
      ackType,
      requestId,
    });
    const { command } = cnx.sendSimpleCommandRequest({ command: commandAck }, responseMediator);
    if (!utils.isNil(command.error)) throw new errors.PulsarFlexAckError(command.message);
    return command;
  }
  const { command } = cnx.sendSimpleCommandRequest({
    command: commands.redeliverUnacknowledgedMessages({ requestId, consumerId, messageIdData }),
    responseMediator,
  });
  return command;
};

module.exports = ack;
