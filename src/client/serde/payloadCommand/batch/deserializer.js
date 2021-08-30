const pulsarApi = require('../../../../commands/protocol/pulsar/pulsar_pb');

const deserializer = ({ metadata, buffer, messages }) => {
  let index = 0;
  for (let i = 0; i < metadata.numMessagesInBatch; ++i) {
    const singleMetadataSize = buffer.readUInt32BE(index);
    index += 4;
    const singleMetadata = pulsarApi.SingleMessageMetadata.deserializeBinary(
      buffer.slice(index, singleMetadataSize + index)
    );
    const objectSingleMetadata = singleMetadata.toObject();
    index += singleMetadataSize;
    const payload = buffer.slice(index, objectSingleMetadata.payloadSize + index);
    messages.push({ payload, singleMessageMetadata: objectSingleMetadata });
    index += objectSingleMetadata.payloadSize;
  }
  return messages;
};

module.exports = deserializer;
