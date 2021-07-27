const pulsarApi = require('../../../commands/protocol/pulsar/pulsar_pb');
const common = require('../common');

// bytes:   4          4
// packet:  [totalSize][commandSize][command]
const deserializer = (buffer) => {
  const deserializedBaseCommand = pulsarApi.BaseCommand.deserializeBinary(
    buffer.slice(common.bytes.COMMAND_SIZE + common.bytes.TOTAL_SIZE)
  );
  const baseCommandObject = deserializedBaseCommand.toObject();
  const typeNumber = deserializedBaseCommand.getType();
  const [type, command] = Object.entries(baseCommandObject)[typeNumber - 1];

  return {
    type,
    command,
  };
};

module.exports = deserializer;
