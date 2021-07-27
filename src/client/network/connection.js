const createSocket = require('./socket/socket');
const resolver = require('../resolver');
const serde = require('../serde');

const connection = async ({ host, port }) => {
  const socket = await createSocket({
    host,
    port,
    onData: resolver.data,
    onEnd: () => console.log('fin'),
    onTimeout: () => console.log('timed out buddy'),
    onError: () => console.log('lol'),
  });

  return {
    sendSimpleCommandRequest: ({ command }) => {
      const request = serde.simpleCommand.serializer({ command });

      socket.write(request, 'binary');
    },

    sendPayloadCommandRequest: ({ command, metadataCommand, payload }) => {
      const request = serde.payloadCommand.serializer({ command, metadataCommand, payload });

      socket.write(request, 'binary');
    },

    sendBatchPayloadCommandRequest: ({ command, metadataCommand, payload }) => {
      const request = serde.batchPayloadCommand.serializer({ command, metadataCommand, payload });

      socket.write(request, 'binary');
    },
  };
};

module.exports = connection;
