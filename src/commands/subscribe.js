const pulsarApi = require('./protocol/pulsar/pulsar_pb');

const buildSubscribe = ({
  topic,
  subscription,
  subType,
  consumerId,
  consumerName,
  readCompacted,
  requestId,
}) => {
  const baseCommand = new pulsarApi.BaseCommand().setType(pulsarApi.BaseCommand.Type.SUBSCRIBE);

  return baseCommand.setSubscribe(
    new pulsarApi.CommandSubscribe()
      .setTopic(topic)
      .setSubscription(subscription)
      .setSubtype(subType)
      .setConsumerId(consumerId)
      .setRequestId(requestId)
      .setConsumerName(consumerName)
      .setReadCompacted(readCompacted)
  );
};

module.exports = buildSubscribe;
