const pulsarApi = require('../../commands/protocol/pulsar/pulsar_pb');

const ponger = ({ cnx }) => {
  const basePongCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.PONG);
  const commandPong = basePongCommand.setPong(new pulsarApi.CommandPong());

  cnx.sendSimpleCommandRequest({ command: commandPong });
};

module.exports = ponger;
