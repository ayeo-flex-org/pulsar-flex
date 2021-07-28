const services = require('./services');
const responseMediators = require('../responseMediators');

class Producer {
  constructor({ pulsar, topic, producerConfiguration }) {
    this._client = pulsar;
    this._topic = topic;
    this._producerConfigiration = producerConfiguration;
    this._requestId = 0;
    this._producerId = 0;
    this._producerName = '';
    this._createCloseResponseMediator = new responseMediators.RequestIdResponseMediator({
      client: pulsar,
      commands: ['producerSuccess', 'success', 'error'],
    });
    this._sendResponseMediator = new responseMediators.SendResponseMediator({
      client: pulsar,
      commands: ['sendReceipt', 'sendError'],
    });
  }

  create = async () => {
    await this._client.connect();
    const { command } = await services.create({
      topic: this._topic,
      requestId: this._requestId,
      producerId: this._producerId,
      cnx: this._client.getCnx(),
      responseMediator: this._createCloseResponseMediator,
    });
    const { producerName, lastSequenceId } = command;
    this._requestId++;
    this._producerName = producerName;
    this._sequenceId = lastSequenceId + 1;
    return producerName;
  };

  close = async () => {
    const closePromise = services.close({
      producerId: this._producerId,
      cnx: this._client.getCnx(),
      requestId: this._requestId,
      responseMediator: this._createCloseResponseMediator,
    });
    this._requestId++;
    return closePromise;
  };

  send = async ({ payload, properties }) => {
    const sendPromise = services.send({
      producerId: this._producerId,
      producerName: this._producerName,
      cnx: this._client.getCnx(),
      sequenceId: this._sequenceId,
      responseMediator: this._sendResponseMediator,
      payload,
      properties,
    });
    this._sequenceId++;
    return sendPromise;
  };
}

module.exports = Producer;
