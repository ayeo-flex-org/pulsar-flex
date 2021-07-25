const crc32 = require('buffer-crc32');

const buildPayloadCommand = ({ command, metadataCommand, payload }) => {
  const messageBinary = command.serializeBinary();
  const metadataBinary = metadataCommand.serializeBinary();

  const commandSizeBuffer = Buffer.alloc(4);
  const totalSizeBuffer = Buffer.alloc(4);
  const magicNumberBuffer = Buffer.alloc(2);
  const checkSumBuffer = Buffer.alloc(4);
  const metadataSizeBuffer = Buffer.alloc(4);

  checkSumBuffer.writeInt32BE(crc32(metadataSizeBuffer, messageBinary, payload));
  commandSizeBuffer.writeInt32BE(messageBinary.length);
  metadataSizeBuffer.writeInt32BE(metadataBinary.length);
  magicNumberBuffer.writeInt16BE(3585); // 0x0e01
  totalSizeBuffer.writeInt32BE(
    messageBinary.length +
      commandSizeBuffer.length +
      magicNumberBuffer.length +
      messageBinary.length +
      checkSumBuffer.length +
      metadataBinary.length +
      metadataSizeBuffer.length +
      payload.length
  );

  return Buffer.concat([
    totalSizeBuffer,
    commandSizeBuffer,
    magicNumberBuffer,
    messageBinary,
    checkSumBuffer,
    metadataSizeBuffer,
    metadataBinary,
    payload,
  ]);
};

module.exports = buildPayloadCommand;
