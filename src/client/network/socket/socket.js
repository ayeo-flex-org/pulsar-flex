const socketFactory = require('./socketFactory');

module.exports = async ({ host, port, onData, onError}) => {
  const socket = await socketFactory({ host, port });

  socket.on('data', onData);
  socket.on('error', onError);

  return socket;
};
