const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const buildAck = ({ consumerId, messageIdData, ackType, requestId }) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.ACK);
  const messageIdList = Array.isArray(messageIdData) 
  ? messageIdData.map((data) => convertToMessageIdData(data)) 
  : convertToMessageIdData(messageIdData); 
  return baseCommand.setAck(
    new pulsarApi.CommandAck()
    .setMessageIdList(Array.isArray(messageIdList) ? messageIdList : [messageIdList])
    .setAckType(ackType)
    .setConsumerId(consumerId)
    .setRequestId(requestId)
  );
};

const convertToMessageIdData = (messageIdData) => {
    return new pulsarApi.MessageIdData()
    .setLedgerid(messageIdData.ledgerid)
    .setEntryid(messageIdData.entryid)
    .setPartition(messageIdData.partition)
    .setBatchIndex(messageIdData.batchIndex)
    .setAckSetList(messageIdData.ackSetList)
    .setBatchSize(messageIdData.batchSize);
}

module.exports = buildAck;
