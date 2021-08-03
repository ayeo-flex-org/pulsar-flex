const commands = require('../../commands');

const pinger = ({ cnx, pingingIntervalMs, responseMediator, logger }) => {
  const commandPing = commands.ping({});

  const intervalId = setInterval(() => {
    logger.trace(`${pingingIntervalMs} passed, sending ping`);
    return cnx
      .sendSimpleCommandRequest({ command: commandPing }, responseMediator)
      .catch(() => logger.warn('Could not send ping to broker.'));
  }, pingingIntervalMs);
  return () => clearInterval(intervalId);
};

module.exports = pinger;
