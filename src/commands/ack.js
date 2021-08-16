const pulsarApi = require('./protocol/pulsar/pulsar_pb');
const common = require('./common');

const buildAck = ({ consumerId, messageIdData, ackType, requestId }) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.ACK);
  const messageIds = Array.isArray(messageIdData)
    ? messageIdData.map((data) => common.convertToMessageIdData(data))
    : [common.convertToMessageIdData(messageIdData)];
  return baseCommand.setAck(
    new pulsarApi.CommandAck()
      .setMessageIdList(messageIds)
      .setAckType(ackType)
      .setConsumerId(consumerId)
      .setRequestId(requestId)
  );
};

module.exports = buildAck;
