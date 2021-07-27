const serde = require('../serde');
const emitter = require('../emitter');

const isSimpleCommand = (buffer) => {
  const totalSize = buffer.readInt32BE();
  const commandSize = buffer.readInt32BE(4);

  return totalSize - commandSize === 4;
};

const data = (buffer) => {
  if (isSimpleCommand(buffer)) {
    const { command, type } = serde.simpleCommand.deserializer(buffer);
    emitter.data.emit(type, { command });
  } else {
    const { command, type, payload, metadata } = serde.payloadCommand.deserializer(buffer);
    emitter.data.emit(type, { command, payload, metadata });
  }
};

module.exports = data;
