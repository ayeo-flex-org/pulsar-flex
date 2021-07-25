const serde = require('../serde');
const emitter = require('../emitter');

const data = (buffer) => {
  const { command, type } = serde.simpleCommand.deserializer(buffer);

  emitter.data.emit(type, { command });
};

module.exports = data;
