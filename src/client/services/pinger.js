const commands = require('../../commands');

const pinger = ({ cnx, pingingIntervalMs }) => {
  const commandPing = commands.ping({});

  setInterval(() => cnx.sendSimpleCommandRequest({ command: commandPing }), pingingIntervalMs);
};

module.exports = pinger;
