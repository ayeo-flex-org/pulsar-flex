const commands = require('../../commands');
const emitter = require('../emitter');

const ponger = ({ cnx }) => {
  const commandPong = commands.pong({});

  emitter.data.on('pong', () => {
    cnx.sendSimpleCommandRequest({ command: commandPong });
  });
};

module.exports = ponger;
