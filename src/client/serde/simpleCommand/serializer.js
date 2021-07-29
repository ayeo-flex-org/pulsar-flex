const common = require('../common');

const buildSimpleCommand = ({ command }) => {
  const serializedBinary = command.serializeBinary();

  const commandSizeBuffer = Buffer.alloc(common.bytes.COMMAND_SIZE);
  const totalSizeBuffer = Buffer.alloc(common.bytes.TOTAL_SIZE);

  commandSizeBuffer.writeUInt32BE(serializedBinary.length);
  totalSizeBuffer.writeUInt32BE(serializedBinary.length + commandSizeBuffer.length);

  return Buffer.concat([totalSizeBuffer, commandSizeBuffer, serializedBinary]);
};

module.exports = buildSimpleCommand;
