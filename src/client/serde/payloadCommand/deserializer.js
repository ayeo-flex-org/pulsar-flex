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

  const deserializedMessageMetadata = pulsarApi.MessageMetadata.deserializeBinary(
    buffer.slice(metadataSizeOffset, deserializedMetadataSize + metadataSizeOffset)
  );

  const payloadOffset = metadataSizeOffset + deserializedMetadataSize;
  const payload = buffer.slice(payloadOffset);

  const metadata = deserializedMessageMetadata.toObject();
  const baseCommandObject = deserializedBaseCommand.toObject();
  const typeNumber = deserializedBaseCommand.getType();
  const [type, command] = Object.entries(baseCommandObject)[typeNumber - 1];

  return {
    type,
    command,
    metadata,
    payload,
  };
};

module.exports = deserializer;
