const pulsarApi = require('../../../commands/protocol/pulsar/pulsar_pb');

// bytes:   4          4                     2            4         4
// packet:  [totalSize][commandSize][command][magicNumber][checkSum][metadataSize][metadata][payload]
const deserializer = (buffer) => {
  const commandSizeOffset = 4;
  const commandOffset = commandSizeOffset + 4;
  const commandSize = buffer.readInt32BE(commandSizeOffset);

  const deserializedBaseCommand = pulsarApi.BaseCommand.deserializeBinary(
    buffer.slice(commandOffset, commandSize + commandOffset)
  );

  const metadataSizeOffset = commandOffset + commandSize;
  const metadataSize = buffer.readInt32BE(metadataSizeOffset);
  const deserializedMessageMetadata = pulsarApi.MessageMetadata.deserializeBinary(
    buffer.slice(metadataSizeOffset, metadataSize + metadataSizeOffset)
  );

  const payloadOffset = metadataSizeOffset + metadataSize;
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
