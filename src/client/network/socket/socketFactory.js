const KEEP_ALIVE_DELAY = 60000; // in ms
const net = require('net');

module.exports = ({ host, port }) => {
  return new Promise((resolve, reject) => {
    const socket = net.connect({ host, port }, () => resolve(socket));

    socket.setKeepAlive(true, KEEP_ALIVE_DELAY);
  });
};
