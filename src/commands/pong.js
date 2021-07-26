const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const buildPong = ({}) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.PONG);
  return baseCommand.setPong(new pulsarApi.CommandPong());
};

module.exports = buildPong;
