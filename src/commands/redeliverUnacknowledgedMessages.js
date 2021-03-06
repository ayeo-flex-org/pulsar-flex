const pulsarApi = require('./protocol/pulsar/pulsar_pb');
const common = require('./common');

const redeliverUnacknowledgedMessages = ({ messageIdData, consumerId }) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(
    pulsarApi.BaseCommand.Type.REDELIVER_UNACKNOWLEDGED_MESSAGES
  );
  const messageIds = Array.isArray(messageIdData)
    ? messageIdData.map((data) => common.convertToMessageIdData(data))
    : [common.convertToMessageIdData(messageIdData)];
  return baseCommand.setRedeliverunacknowledgedmessages(
    new pulsarApi.CommandRedeliverUnacknowledgedMessages()
      .setMessageIdsList(messageIds)
      .setConsumerId(consumerId)
  );
};

module.exports = redeliverUnacknowledgedMessages;
