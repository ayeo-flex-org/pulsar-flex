const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const closeProducer = ({ producerId, requestId }) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(
    pulsarApi.BaseCommand.Type.CLOSE_PRODUCER
  );
  return baseCommand.setCloseProducer(
    new pulsarApi.CommandCloseProducer().setProducerId(producerId).setRequestId(requestId)
  );
};

module.exports = closeProducer;
