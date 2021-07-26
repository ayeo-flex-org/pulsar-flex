const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const messageMetadata = ({ producerName, sequenceId }) => {
  return new pulsarApi.MessageMetadata()
    .setProducerName(producerName)
    .setSequenceId(sequenceId)
    .setPublishTime(Date.now());
};

module.exports = messageMetadata;
