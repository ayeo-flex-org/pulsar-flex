const serde = require('../serde');
const emitter = require('../emitter');

const isSimpleCommand = (buffer) => {
  const totalSize = buffer.readInt32BE();
  const commandSize = buffer.readInt32BE(4);

  return totalSize - commandSize === 4;
};

// Mutate scope in fave of performance
let cachedChunk = null;

const data = (buffer) => {
  let currentBufferIndex = 0;

  buffer = cachedChunk ? Buffer.concat([cachedChunk, buffer]) : buffer;
  cachedChunk = null;

  while (currentBufferIndex < buffer.length) {
    // if the totalSize of the buffer is unreadable (min is 4 bytes) chunk and wait for next buffer
    if (buffer.length - currentBufferIndex < 4) {
      cachedChunk = buffer.slice(currentBufferIndex, buffer.length);
      return;
    }

    const expectedFrameSize = buffer.readUInt32BE(currentBufferIndex) + 4;

    // if the current buffer is not in the expected size, wait for the next buffer and chunk it
    if (expectedFrameSize + currentBufferIndex > buffer.length) {
      cachedChunk = buffer.slice(currentBufferIndex, buffer.length);
      return;
    }

    const slicedBuffer = buffer.slice(currentBufferIndex, currentBufferIndex + expectedFrameSize);

    if (isSimpleCommand(buffer)) {
      const { type, command } = serde.simpleCommand.deserializer(slicedBuffer);
      emitter.data.emit(type, { command });
    } else {
      const { type, command, payload, metadata } = serde.payloadCommand.deserializer(slicedBuffer);
      emitter.data.emit(type, { command, metadata, payload });
    }
    currentBufferIndex += expectedFrameSize;
  }
};

module.exports = data;
