const createSocket = require('./socket/socket');
const resolver = require('../resolver');
const serde = require('../serde');

const sendRequest = (request, nonSerializedData, socket, responseMediator) => {
  socket.write(request, 'binary');

  return responseMediator.response({ data: nonSerializedData });
};

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
    sendSimpleCommandRequest: (dataToSerialize, responseMediator) => {
      return sendRequest(
        serde.simpleCommand.serializer(dataToSerialize),
        dataToSerialize,
        socket,
        responseMediator
      );
    },

    sendPayloadCommandRequest: (dataToSerialize, responseMediator) => {
      return sendRequest(
        serde.payloadCommand.serializer(dataToSerialize),
        dataToSerialize,
        socket,
        responseMediator
      );
    },

    sendPayloadBatchCommandRequest: (dataToSerialize, responseMediator) => {
      return sendRequest(
        serde.payloadBatchCommand.serializer(dataToSerialize),
        dataToSerialize,
        socket,
        responseMediator
      );
    },

    close: () => socket.destroy(),
  };
};

module.exports = connection;
