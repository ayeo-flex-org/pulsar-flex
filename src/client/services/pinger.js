const commands = require('../../commands');

const pinger = ({ cnx, pingingIntervalMs, responseMediator }) => {
  const commandPing = commands.ping({});

  const intervalId = setInterval(
    () => cnx.sendSimpleCommandRequest({ command: commandPing }, responseMediator),
    pingingIntervalMs
  );
  return () => clearInterval(intervalId);
};

module.exports = pinger;
