const pulsarApi = require('../protocol/pulsar/pulsar_pb');

const convertToMessageIdData = (messageIdData) => {
  return new pulsarApi.MessageIdData()
    .setLedgerid(messageIdData.ledgerid)
    .setEntryid(messageIdData.entryid)
    .setPartition(messageIdData.partition)
    .setBatchIndex(messageIdData.batchIndex);
};

module.exports = convertToMessageIdData;
