const buildSimpleCommand = ({ command }) => {
  const serializedBinary = command.serializeBinary();

  const commandSizeBuffer = Buffer.alloc(4);
  const totalSizeBuffer = Buffer.alloc(4);

  commandSizeBuffer.writeInt32BE(serializedBinary.length);
  totalSizeBuffer.writeInt32BE(serializedBinary.length + commandSizeBuffer.length);

  return Buffer.concat([totalSizeBuffer, commandSizeBuffer, serializedBinary]);
};

module.exports = buildSimpleCommand;