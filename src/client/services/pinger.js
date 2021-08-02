const commands = require('../../commands');

const pinger = ({ cnx, pingingIntervalMs, responseMediator }) => {
  const commandPing = commands.ping({});

  const intervalId = setInterval(
    () =>
      cnx
        .sendSimpleCommandRequest({ command: commandPing }, responseMediator)
        .catch(() => console.warn('Could not send ping to broker.')),
    pingingIntervalMs
  );
  return () => clearInterval(intervalId);
};

module.exports = pinger;
