const { CRC } = require('crc-full');
const common = require('../common');

// bytes:   4          4                     2            4         4
// packet:  [totalSize][commandSize][command][magicNumber][checkSum][metadataSize][metadata][payload]
const buildPayloadCommand = ({ command, metadataCommand, payload }) => {
  const crc = new CRC('CRC32_C', 32, 0x1edc6f41, 0xffffffff, 0xffffffff, true, true);
  const messageBinary = command.serializeBinary();
  const metadataBinary = metadataCommand.serializeBinary();

  const commandSizeBuffer = Buffer.alloc(common.bytes.COMMAND_SIZE);
  const totalSizeBuffer = Buffer.alloc(common.bytes.TOTAL_SIZE);
  const magicNumberBuffer = Buffer.alloc(common.bytes.MAGIC_NUMBER);
  const checkSumBuffer = Buffer.alloc(common.bytes.CRC);
  const metadataSizeBuffer = Buffer.alloc(common.bytes.METADATA_SIZE);

  commandSizeBuffer.writeUInt32BE(messageBinary.length);
  metadataSizeBuffer.writeUInt32BE(metadataBinary.length);
  magicNumberBuffer.writeInt16BE(0x0e01);

  const payloadBuffer = Buffer.concat(
    payload.map(({ metadata, payload }) => {
      const serializedMetadata = metadata.serializeBinary();
      const metadataLengthBuffer = Buffer.alloc(common.bytes.METADATA_SIZE);
      const payloadBuffer = Buffer.from(payload);

      metadataLengthBuffer.writeUInt32BE(serializedMetadata.length);

      return Buffer.concat([metadataLengthBuffer, serializedMetadata, payloadBuffer]);
    })
  );

  checkSumBuffer.writeUInt32BE(
    crc.compute(Buffer.concat([metadataSizeBuffer, metadataBinary, payloadBuffer]))
  );

  totalSizeBuffer.writeUInt32BE(
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
