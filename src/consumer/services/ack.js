const commands = require('../../commands');
const errors = require('../../errors');
const utils = require('../../utils');

const ack = async ({
  client,
  consumerId,
  messageIdData,
  ackType,
  requestId,
  responseMediator,
  negativeAckResponseMediator,
  prioritizeUnacknowledgedMessages,
  setRedeliveringUnacknowledgedMessages,
}) => {
  const cnx = client.getCnx();
  if (ackType >= 0) {
    const commandAck = commands.ack({
      consumerId,
      messageIdData,
      ackType,
      requestId,
    });
    const { command } = await cnx.sendSimpleCommandRequest(
      { command: commandAck },
      responseMediator
    );
    if (!utils.isNil(command.error)) throw new errors.PulsarFlexAckError(command.message);
    return command;
  }
  setRedeliveringUnacknowledgedMessages(true);
  await cnx.sendSimpleCommandRequest(
    {
      command: commands.redeliverUnacknowledgedMessages({
        consumerId,
        messageIdData,
        prioritizeUnacknowledgedMessages,
      }),
    },
    negativeAckResponseMediator,
    true
  );
};

module.exports = ack;
