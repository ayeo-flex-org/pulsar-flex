const commands = require('../../commands');
const emitter = require('../emitter');

const ponger = ({ cnx, responseMediator }) => {
  const commandPong = commands.pong({});

  emitter.data.on('ping', () => {
    cnx.sendSimpleCommandRequest({ command: commandPong }, responseMediator);
  });
};

module.exports = ponger;
