const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const createProducer = ({
  topic,
  producerId,
  requestId,
  producerName,
  producerAccessMode = pulsarApi.ProducerAccessMode.SHARED,
}) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.PRODUCER);
  return producerName
    ? baseCommand.setProducer(
        new pulsarApi.CommandProducer()
          .setTopic(topic)
          .setProducerId(producerId)
          .setRequestId(requestId)
          .setProducerAccessMode(producerAccessMode)
          .setProducerName(producerName)
      )
    : baseCommand.setProducer(
        new pulsarApi.CommandProducer()
          .setTopic(topic)
          .setProducerId(producerId)
          .setRequestId(requestId)
          .setProducerAccessMode(producerAccessMode)
      );
};

module.exports = createProducer;
