const createSocket = require('./socket/socket');
const resolver = require('../resolver');
const serde = require('../serde');
const { PulsarFlexSocketError } = require('../../errors');

const sendRequest = (request, nonSerializedData, socket, responseMediator, autoResolve) => {
  socket.write(request, 'binary');
  return responseMediator.response({ data: nonSerializedData, autoResolve });
};

const connection = async ({ host, port, logger }) => {
  logger.debug(`connecting to ${host}:${port}`);
  const socket = await createSocket({
    host,
    port,
    onData: resolver.data,
    onError: (e) => logger.error(e),
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
