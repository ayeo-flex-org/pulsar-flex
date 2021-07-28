const services = require('./services');

class Producer {
  constructor({ client, topic, producerConfiguration }) {
    this._client = client;
    this._topic = topic;
    this._producerConfigiration = producerConfiguration;
    this._requestId = 0;
    this._producerId = 0;
    this._client = client;
    this._producerName = '';
  }

  create = async () => {
    this._client = await this._client.connect();
    const { producerName, sequenceId } = await services.create({
      topic: this._topic,
      requestId: this._requestId,
      producerId: this._producerId,
      client: this._client,
    });
    this._requestId++;
    this._producerName = producerName;
    this._sequenceId = sequenceId;
    return producerName;
  };

  close = async () => {
    const closePromise = services.close({
      producerId: this._producerId,
      client: this._client,
      requestId: this._requestId,
    });
    this._requestId++;
    return closePromise;
  };

  send = async ({ payload }) => {
    const sendPromise = services.send({
      producerId: this._producerId,
      producerName: this._producerName,
      client: this._client,
      sequenceId: this._sequenceId,
    })({ payload });
    this._sequenceId++;
    return sendPromise;
  };
}

module.exports = Producer;
