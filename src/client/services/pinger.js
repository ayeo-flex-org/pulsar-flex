const commands = require('../../commands');

const pinger = ({ cnx, pingingIntervalMs, responseMediator }) => {
  const commandPing = commands.ping({});

  setInterval(
    () => cnx.sendSimpleCommandRequest({ command: commandPing }, responseMediator),
    pingingIntervalMs
  );
};

module.exports = pinger;
