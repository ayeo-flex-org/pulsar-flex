const createSocket = require('./socket/socket');
const resolver = require('../resolver');
const serde = require('../serde');

const sendRequest = (request, nonSerializedData, socket, responseMediator, autoResolve) => {
  if (socket.readyState !== 'open') {
    throw Error('Socket closed.');
  }
  socket.write(request, 'binary');
  return responseMediator.response({ data: nonSerializedData, autoResolve });
};

const connection = async ({ host, port, logger, emitter }) => {
  logger.debug(`connecting to ${host}:${port}`);
  const socket = await createSocket({
    host,
    port,
    onError: (e) => logger.error(e),
    onData: resolver.data(emitter),
  });
  return {
    sendSimpleCommandRequest: (dataToSerialize, responseMediator, autoResolve = false) => {
      return sendRequest(
        serde.simpleCommand.serializer(dataToSerialize),
        dataToSerialize,
        socket,
        responseMediator,
        autoResolve
      );
    },

    sendPayloadCommandRequest: (dataToSerialize, responseMediator, autoResolve = false) => {
      return sendRequest(
        serde.payloadCommand.serializer(dataToSerialize),
        dataToSerialize,
        socket,
        responseMediator,
        autoResolve
      );
    },

    sendPayloadBatchCommandRequest: (dataToSerialize, responseMediator, autoResolve = false) => {
      return sendRequest(
        serde.payloadBatchCommand.serializer(dataToSerialize),
        dataToSerialize,
        socket,
        responseMediator,
        autoResolve
      );
    },

    addCleanUpListener(cleanUp) {
      socket.once('close', cleanUp);
    },

    close: () => {
      socket.end();
      socket.unref();
    },
  };
};
module.exports = connection;
