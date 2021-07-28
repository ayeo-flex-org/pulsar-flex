const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const messageMetadata = ({
  producerName,
  sequenceId,
  numMessages = undefined,
  properties = [],
}) => {
  const keyValueProperties = Object.entries(properties).map(([key, value]) =>
    new pulsarApi.KeyValue().setKey(key).setValue(value)
  );
  return new pulsarApi.MessageMetadata()
    .setProducerName(producerName)
    .setSequenceId(sequenceId)
    .setPropertiesList(keyValueProperties)
    .setNumMessagesInBatch(numMessages)
    .setPublishTime(Date.now());
};

module.exports = messageMetadata;
