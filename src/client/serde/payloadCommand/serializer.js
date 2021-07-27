const { CRC } = require('crc-full');

// bytes:   4          4                     2            4         4
// packet:  [totalSize][commandSize][command][magicNumber][checkSum][metadataSize][metadata][payload]
const buildPayloadCommand = ({ command, metadataCommand, payload }) => {
  const crc = new CRC('CRC32_C', 32, 0x1edc6f41, 0xffffffff, 0xffffffff, true, true);
  const messageBinary = command.serializeBinary();
  const metadataBinary = metadataCommand.serializeBinary();

  const commandSizeBuffer = Buffer.alloc(4);
  const totalSizeBuffer = Buffer.alloc(4);
  const magicNumberBuffer = Buffer.alloc(2);
  const checkSumBuffer = Buffer.alloc(4);
  const metadataSizeBuffer = Buffer.alloc(4);

  commandSizeBuffer.writeInt32BE(messageBinary.length);
  metadataSizeBuffer.writeInt32BE(metadataBinary.length);
  magicNumberBuffer.writeInt16BE(0x0e01);

  checkSumBuffer.writeInt32BE(
    crc.compute(Buffer.concat([metadataSizeBuffer, metadataBinary, payloadBuffer]))
  );

  const payloadBuffer = Buffer.from(payload);

  totalSizeBuffer.writeInt32BE(
    messageBinary.length +
      commandSizeBuffer.length +
      magicNumberBuffer.length +
      checkSumBuffer.length +
      metadataBinary.length +
      metadataSizeBuffer.length +
      payloadBuffer.length
  );

  return Buffer.concat([
    totalSizeBuffer,
    commandSizeBuffer,
    messageBinary,
    magicNumberBuffer,
    checkSumBuffer,
    metadataSizeBuffer,
    metadataBinary,
    payloadBuffer,
  ]);
};

module.exports = buildPayloadCommand;
