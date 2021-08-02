const commands = require('../../commands');
const emitter = require('../emitter');

const ponger = ({ cnx, responseMediator }) => {
  const pong = function ({ cnx, responseMediator }) {
    const commandPong = commands.pong({});
    return cnx.sendSimpleCommandRequest({ command: commandPong }, responseMediator, true);
  };

  emitter.data.on('ping', () =>
    pong({ cnx, responseMediator }).catch((e) => console.warn('Could not send pong to broker.', e))
  );

  return () => emitter.data.removeAllListeners('ping');
};

module.exports = ponger;
