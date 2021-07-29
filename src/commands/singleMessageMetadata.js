const pulsarApi = require('./protocol/pulsar/pulsar_pb');
const errors = require('../errors');
const utils = require('../utils');

const singleMessageMetadata = ({ payload, properties }) => {
  const keyValueProperties = Object.entries(properties).map(([key, value]) =>
    new pulsarApi.KeyValue().setKey(key).setValue(value)
  );
  if (utils.isNil(payload)) throw new errors.PulsarFlexNoPayloadError();
  const payloadSize = Buffer.from(payload).byteLength;
  return new pulsarApi.SingleMessageMetadata()
    .setPayloadSize(payloadSize)
    .setPropertiesList(keyValueProperties);
};

module.exports = singleMessageMetadata;
