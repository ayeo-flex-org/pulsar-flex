const pulsarApi = require('../../../commands/protocol/pulsar/pulsar_pb');
const common = require('../common');

// bytes:   4          4                     2            4         4
// packet:  [totalSize][commandSize][command][magicNumber][checkSum][metadataSize][metadata][payload]
const deserializer = (buffer) => {
  const commandSizeOffset = common.bytes.TOTAL_SIZE;
  const commandOffset = common.bytes.TOTAL_SIZE + common.bytes.COMMAND_SIZE;

  const deserializedCommandSize = buffer.readInt32BE(commandSizeOffset);
  const deserializedBaseCommand = pulsarApi.BaseCommand.deserializeBinary(
    buffer.slice(commandOffset, deserializedCommandSize + commandOffset)
  );

  const metadataSizeOffset =
    common.bytes.CRC + common.bytes.MAGIC_NUMBER + commandOffset + deserializedCommandSize;

  const deserializedMetadataSize = buffer.readInt32BE(metadataSizeOffset);
  const metadataOffset = metadataSizeOffset + common.bytes.METADATA_SIZE;
  const deserializedMessageMetadata = pulsarApi.MessageMetadata.deserializeBinary(
    buffer.slice(metadataOffset, deserializedMetadataSize + metadataOffset)
  );

  // Notice the +4 I added in the line under me.
  const payloadOffset = metadataSizeOffset + deserializedMetadataSize + 4;
  const payloadBuffer = buffer.slice(payloadOffset);

  const metadata = deserializedMessageMetadata.toObject();
  const baseCommandObject = deserializedBaseCommand.toObject();
  const typeNumber = deserializedBaseCommand.getType();
  const [type, command] = Object.entries(baseCommandObject)[typeNumber - 1];
  const payload = deserializePayload({
    metadata,
    messageId: command.messageId,
    buffer: payloadBuffer,
  });

  return {
    type,
    command,
    metadata,
    payload,
  };
};

const deserializePayload = ({ metadata, buffer }) => {
  let messages = [];
  for (let i = 0; i < metadata.numMessagesInBatch; i++) {
    const singleMetadataSize = buffer.readUInt32BE(i);
    i += 4;
    const singleMetadata = pulsarApi.SingleMessageMetadata.deserializeBinary(
      buffer.slice(i, singleMetadataSize + i)
    );
    const objectSingleMetadata = singleMetadata.toObject();
    i += singleMetadataSize;
    const message = buffer.slice(i, objectSingleMetadata.payloadSize + i);
    messages.push(message);
    i += singleMetadata.payloadSize;
  }
  return messages;
};

module.exports = deserializer;
