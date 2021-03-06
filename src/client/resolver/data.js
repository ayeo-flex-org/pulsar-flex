const serde = require('../serde');

const isSimpleCommand = (buffer) => {
  const totalSize = buffer.readInt32BE();
  const commandSize = buffer.readUInt32BE(4);

  return totalSize - commandSize === 4;
};

// Mutate scope in fave of performance

const data = (emitter) => {
  let cachedChunk = null;

  return (buffer) => {
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

      if (isSimpleCommand(slicedBuffer)) {
        const { type, command } = serde.simpleCommand.deserializer(slicedBuffer);
        emitter.emit(type, { command });
      } else {
        const { type, command, messages, metadata } =
          serde.payloadCommand.deserializer(slicedBuffer);
        emitter.emit(type, { command, metadata, messages });
      }
      currentBufferIndex += expectedFrameSize;
    }
  };
};

module.exports = data;
