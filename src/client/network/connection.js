const createSocket = require('./socket/socket');
const resolver = require('../resolver');
const serde = require('../serde');

const sendRequest = (request, nonSerializedData, socket, responseMediator) => {
  console.log('f');
  console.log(socket.readyState);
  console.log(nonSerializedData);
  if (socket.readyState !== 'open') throw new Error('fuckkk');
  console.log('u');
  socket.write(request, 'binary');
  console.log('ck');

  const idk = responseMediator.response({ data: nonSerializedData });
  console.log(idk);
  return idk;
};

const connection = async ({ host, port }) => {
  const socket = await createSocket({
    host,
    port,
    onData: resolver.data,
    onError: (e) => console.log(e),
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
