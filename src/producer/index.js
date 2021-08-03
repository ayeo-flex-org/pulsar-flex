const services = require('./services');
const responseMediators = require('../responseMediators');
const errors = require('../errors');
const utils = require('../utils');
const Pulsar = require('../client');
const pulsarApi = require('../commands/protocol/pulsar/pulsar_pb');

const ACCESS_MODES = pulsarApi.ProducerAccessMode;

class Producer {
  constructor({ pulsar, topic, discoveryServers, jwt, producerAccessMode }) {
    this._client = new Pulsar({
      discoveryServers,
      jwt,
    });
    this._topic = topic;
    this._producerAccessMode = producerAccessMode;
    this._requestId = 0;
    this._producerId = 0;
    this._producerName = null;
    this._createCloseResponseMediator = new responseMediators.RequestIdResponseMediator({
      client: this._client,
      commands: ['producerSuccess', 'success', 'error'],
    });
    this._sendResponseMediator = new responseMediators.SendResponseMediator({
      client: this._client,
      commands: ['sendReceipt', 'sendError'],
      producerAccessMode,
    });
    this._connected = false;
    services.producerClose({
      client: this._client,
      create: this.create,
      setConnected: this._setConnected,
      sendResponseMediator: this._sendResponseMediator,
    });
  }

  _setConnected = (isConnected) => (this._connected = isConnected);
  create = async () => {
    if (this._connected)
      throw new errors.PulsarFlexProducerCreationError({
        message: 'Already connected, please close before trying again',
      });
    await this._client.connect({ topic: this._topic });
    await this._client.getCnx().addCleanUpListener(() => {
      this._connected = false;
      services.reconnect(this.create).then(() => (this._connected = true));
    });
    const { command } = await services.create({
      topic: this._topic,
      requestId: this._requestId,
      producerId: this._producerId,
      producerName: this._producerName,
      client: this._client,
      responseMediator: this._createCloseResponseMediator,
      producerAccessMode: this._producerAccessMode,
    });
    this._connected = true;
    const { producerName, lastSequenceId } = command;
    this._requestId++;
    this._producerName = producerName;
    this._sequenceId = lastSequenceId + 1;
    return true;
  };

  close = async () => {
    await services.close({
      connected: this._connected,
      producerId: this._producerId,
      client: this._client,
      requestId: this._requestId,
      responseMediator: this._createCloseResponseMediator,
    });
    this._requestId++;
    this._connected = false;
    return true;
  };

  sendMessage = async ({ payload, properties }) => {
    if (!this._connected)
      throw new errors.PulsarFlexProducerSendError({
        message: 'Cannot send messages over not connected producer',
      });
    if (utils.isNil(payload)) throw new errors.PulsarFlexNoPayloadError();
    try {
      await services.sendMessage({
        producerId: this._producerId,
        producerName: this._producerName,
        client: this._client,
        sequenceId: this._sequenceId,
        responseMediator: this._sendResponseMediator,
        payload,
        properties,
      });
    } catch (e) {
      await new Promise(async (resolve, reject) => {
        this._client.getResponseEvents().once('producerSuccess', () => {
          resolve(this.sendMessage({ payload, properties }));
        });
      });
    }
    this._sequenceId++;
    return true;
  };

  sendBatch = async ({ messages }) => {
    if (!this._connected)
      throw new errors.PulsarFlexProducerSendError({
        message: 'Cannot send messages over not connected producer',
      });
    try {
      await services.sendBatch({
        producerId: this._producerId,
        producerName: this._producerName,
        client: this._client,
        sequenceId: this._sequenceId,
        responseMediator: this._sendResponseMediator,
        messages,
      });
    } catch (e) {
      return await new Promise(async (resolve, reject) => {
        this._client.getResponseEvents().once('producerSuccess', () => {
          resolve(this.sendBatch({ messages }));
        });
      });
    }

    this._sequenceId++;
    return true;
  };

  static get ACCESS_MODES() {
    return ACCESS_MODES;
  }
}

module.exports = Producer;
