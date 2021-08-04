const commands = require('../../commands');

const ponger = ({ cnx, responseMediator, logger, emitter }) => {
  const pong = function ({ cnx, responseMediator }) {
    const commandPong = commands.pong({});
    logger.trace(`Received ping, sending pong`);
    return cnx.sendSimpleCommandRequest({ command: commandPong }, responseMediator, true);
  };

  emitter.on('ping', () =>
    pong({ cnx, responseMediator }).catch((e) => logger.warn('Could not send pong to broker.', e))
  );

  return () => {
    logger.info(`Connection have been closed, clearing listener of pings`);
    emitter.removeAllListeners('ping');
  };
};

module.exports = ponger;
