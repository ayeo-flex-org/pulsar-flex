const CRC = require('crc-full');

const buildPayloadCommand = ({ command, metadataCommand, payload }) => {
  const crc = new CRC('CRC32_C', 32, 0x1edc6f41, 0xffffffff, 0xffffffff, true, true);
  const messageBinary = command.serializeBinary();
  const metadataBinary = metadataCommand.serializeBinary();

  const commandSizeBuffer = Buffer.alloc(4);
  const totalSizeBuffer = Buffer.alloc(4);
  const magicNumberBuffer = Buffer.alloc(2);
  const checkSumBuffer = Buffer.alloc(4);
  const metadataSizeBuffer = Buffer.alloc(4);

  checkSumBuffer.writeInt32BE(
    crc.compute(Buffer.concat([metadataSizeBuffer, messageBinary, payload]))
  );
  commandSizeBuffer.writeInt32BE(messageBinary.length);
  metadataSizeBuffer.writeInt32BE(metadataBinary.length);
  magicNumberBuffer.writeInt16BE(0x0e01);
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
