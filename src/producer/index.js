const services = require('./services');
const responseMediators = require('../responseMediators');
const errors = require('../errors');
const utils = require('../utils');

class Producer {
  constructor({ pulsar, topic, producerConfiguration }) {
    this._client = pulsar;
    this._topic = topic;
    this._producerConfigiration = producerConfiguration;
    this._requestId = 0;
    this._producerId = 0;
    this._producerName = null;
    this._createCloseResponseMediator = new responseMediators.RequestIdResponseMediator({
      client: pulsar,
      commands: ['producerSuccess', 'success', 'error'],
    });
    this._sendResponseMediator = new responseMediators.SendResponseMediator({
      client: pulsar,
      commands: ['sendReceipt', 'sendError'],
    });
    this._connected = false;
    services.reconnect(this._client, this.create, this._setConnected, this._producerConfigiration);
  }

  _setConnected = () => (this._connected = false);

  create = async () => {
    await this._client.connect();
    this._connected = true;
    const { command } = await services.create({
      topic: this._topic,
      requestId: this._requestId,
      producerId: this._producerId,
      cnx: this._client.getCnx(),
      responseMediator: this._createCloseResponseMediator,
      producerConfiguration: this._producerConfigiration,
    });
    const { producerName, lastSequenceId } = command;
    this._requestId++;
    this._producerName = producerName;
    this._sequenceId = lastSequenceId + 1;
    return true;
  };

  close = async () => {
    await services.close({
      producerId: this._producerId,
      cnx: this._client.getCnx(),
      requestId: this._requestId,
      responseMediator: this._createCloseResponseMediator,
    });
    this._requestId++;
    return true;
  };

  sendMessage = async ({ payload, properties }) => {
    if (!utils.isNil(payload)) throw new errors.PulsarFlexNoPayloadError();
    await services.sendMessage({
      producerId: this._producerId,
      producerName: this._producerName,
      cnx: this._client.getCnx(),
      sequenceId: this._sequenceId,
      responseMediator: this._sendResponseMediator,
      payload,
      properties,
    });
    this._sequenceId++;
    return true;
  };

  sendBatch = async ({ messages }) => {
    await services.sendBatch({
      producerId: this._producerId,
      producerName: this._producerName,
      cnx: this._client.getCnx(),
      sequenceId: this._sequenceId,
      responseMediator: this._sendResponseMediator,
      messages,
    });
    this._sequenceId++;
    return true;
  };
}

module.exports = Producer;
