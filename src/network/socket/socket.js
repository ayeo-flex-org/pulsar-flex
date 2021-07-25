const socketFactory = require('./socketFactory');

module.exports = async ({ host, port, onData, onEnd, onError, onTimeout }) => {
  const socket = await socketFactory({ host, port });

  socket.on('data', onData);
  socket.on('end', onEnd);
  socket.on('error', onError);
  socket.on('timeout', onTimeout);

  return socket;
};
