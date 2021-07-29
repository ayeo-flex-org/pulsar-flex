const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const buildCloseConsumer = ({ consumerId, requestId }) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(
    pulsarApi.BaseCommand.Type.CLOSE_CONSUMER
  );

  return baseCommand.setCloseConsumer(
    new pulsarApi.CommandCloseConsumer().setConsumerId(consumerId).setRequestId(requestId)
  );
};

module.exports = buildCloseConsumer;
