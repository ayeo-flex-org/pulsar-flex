const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const singleMessageMetadata = ({ payload, properties }) => {
  const keyValueProperties = Object.entries(properties).map(([key, value]) =>
    new pulsarApi.KeyValue().setKey(key).setValue(value)
  );
  const payloadSize = Buffer.from(payload).byteLength;
  return new pulsarApi.SingleMessageMetadata()
    .setPayloadSize(payloadSize)
    .setPropertiesList(keyValueProperties);
};

module.exports = singleMessageMetadata;
