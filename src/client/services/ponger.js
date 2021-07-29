const commands = require('../../commands');
const emitter = require('../emitter');

const ponger = ({ cnx, responseMediator }) => {
  const ping = function ({ cnx, responseMediator }) {
    const commandPong = commands.pong({});
    cnx.sendSimpleCommandRequest({ command: commandPong }, responseMediator);
  };

  emitter.data.on('ping', () => ping({ cnx, responseMediator }));

  return () => emitter.data.removeAllListeners('ping');
};

module.exports = ponger;
