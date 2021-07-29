const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const buildFlow = ({ consumerId, messagePermits }) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.FLOW);

  return baseCommand.setFlow(
    new pulsarApi.CommandFlow().setConsumerId(consumerId).setMessagepermits(messagePermits)
  );
};

module.exports = buildFlow;
