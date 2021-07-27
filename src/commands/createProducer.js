const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const createProducer = ({ topic, producerId, requestId, producerName }) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.PRODUCER);
  return baseCommand.setProducer(
    new pulsarApi.CommandProducer()
      .setTopic(topic)
      .setProducerId(producerId)
      .setRequestId(requestId)
      .setProducerName(producerName)
  );
};

module.exports = createProducer;
