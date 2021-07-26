const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const buildPing = ({}) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.PING);
  return baseCommand.setPing(new pulsarApi.CommandPing());
};

module.exports = buildPing;
