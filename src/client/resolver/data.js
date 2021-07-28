const serde = require('../serde');
const emitter = require('../emitter');

const isSimpleCommand = (buffer) => {
  const totalSize = buffer.readInt32BE();
  const commandSize = buffer.readInt32BE(4);

  return totalSize - commandSize === 4;
};

let latestChunk = null;

const data = (buffer) => {
  let currentBufferIndex = 0;
  buffer = latestChunk ? Buffer.concat([latestChunk, buffer]) : buffer;
  while (currentBufferIndex < buffer.length) {
    if (buffer.length - currentBufferIndex < 4) {
      latestChunk = buffer.slice(currentBufferIndex, buffer.length);
      return;
    }
    const bufferSize = buffer.readInt32BE(currentBufferIndex) + 4;

    if (bufferSize + currentBufferIndex > buffer.length) {
      latestChunk = buffer.slice(currentBufferIndex, buffer.length);
      return;
    }

    const slicedBuffer = buffer.slice(currentBufferIndex, currentBufferIndex + bufferSize);

    if (isSimpleCommand(buffer)) {
      const { type, command } = serde.simpleCommand.deserializer(slicedBuffer);
      emitter.data.emit(type, { command });
    } else {
      const { type, command, payload, metadata } = serde.payloadCommand.deserializer(slicedBuffer);
      emitter.data.emit(type, { command, metadata, payload });
    }
    currentBufferIndex += bufferSize;
  }
};

module.exports = data;
