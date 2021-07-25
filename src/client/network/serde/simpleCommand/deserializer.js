const pulsarApi = require('../../../../commands/protocol/pulsar/pulsar_pb');

const deserializer = (buffer) => {
  // Currently un used, probably will find usage later on
  const totalSize = buffer.readInt32BE();
  const commandSize = buffer.readInt32BE(4);

  const deserializedBaseCommand = pulsarApi.BaseCommand.deserializeBinary(buffer.slice(8));
  const baseCommandObject = deserializedBaseCommand.toObject();
  const typeNumber = deserializedBaseCommand.getType();
  const [type, command] = Object.entries(baseCommandObject)[typeNumber - 1];

  return {
    type,
    command,
  };
};

module.exports = deserializer;
