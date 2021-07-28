const serde = require('../serde');
const emitter = require('../emitter');

const isSimpleCommand = (buffer) => {
  const totalSize = buffer.readInt32BE();
  const commandSize = buffer.readInt32BE(4);

  return totalSize - commandSize === 4;
};

const data = (buffer) => {
  let currentBufferIndex = 0;
  while (currentBufferIndex < buffer.length) {
    const bufferSize = buffer.readInt32BE(currentBufferIndex) + 4;
    if (isSimpleCommand(buffer)) {
      const { type, command } = serde.simpleCommand.deserializer(buffer);
      emitter.data.emit(type, { command });
    } else {
      const { type, command, payload, metadata } = serde.payloadCommand.deserializer(
        buffer.slice(currentBufferIndex, currentBufferIndex + bufferSize)
      );
      emitter.data.emit(type, { command, metadata, payload });
    }
    currentBufferIndex += bufferSize;
  }
};

module.exports = data;
