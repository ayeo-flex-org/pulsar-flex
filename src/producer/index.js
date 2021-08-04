const services = require('./services');
const responseMediators = require('../responseMediators');
const errors = require('../errors');
const utils = require('../utils');
const Pulsar = require('../client');
const pulsarApi = require('../commands/protocol/pulsar/pulsar_pb');
const { createLogger, LEVELS } = require('../logger');
const defaultLogger = require('../logger/default');

const ACCESS_MODES = pulsarApi.ProducerAccessMode;

class Producer {
  constructor({
    topic,
    discoveryServers,
    jwt,
    producerAccessMode,
    logLevel,
    logCreator = defaultLogger,
    maxPendingMessagesQueueSize = Number.MAX_SAFE_INTEGER,
  }) {
    this._logger = createLogger({ logLevel, logCreator });
    this._client = new Pulsar({
      discoveryServers,
      jwt,
      logger: this._logger,
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
    this._pendingMessageQueue = [];
    this._maxPendingMessagesQueueSize = maxPendingMessagesQueueSize;
    services.resendMessages(this._client, this._pendingMessageQueue, this._logger);
  }

  _setConnected = (isConnected) => (this._connected = isConnected);
  create = async () => {
    this._logger.info(`Creating producer to topic: ${this._topic}`);

    if (this._connected)
      throw new errors.PulsarFlexProducerCreationError({
        message: 'Already connected, please close before trying again',
      });
    this._logger.info(`Creating client connection for producer to topic: ${this._topic}`);

    await this._client.connect({ topic: this._topic });
    await this._client.getCnx().addCleanUpListener(() => {
      this._logger.warn(`Starting reconnection because socket ended unexpectedly`);
      this._connected = false;
      this._created && services.reconnect(this.create).then(() => (this._connected = true));
    });

    this._logger.info(`Connected successfully will send command create topic: ${this._topic}`);

    const { command } = await services.create({
      topic: this._topic,
      requestId: this._requestId,
      producerId: this._producerId,
      producerName: this._producerName,
      client: this._client,
      responseMediator: this._createCloseResponseMediator,
      producerAccessMode: this._producerAccessMode,
    });

    this._logger.info(`Created producer successfully to topic: ${this._topic}`);

    this._connected = true;
    this._created = true;
    const { producerName, lastSequenceId } = command;
    this._requestId++;
    this._producerName = producerName;
    this._sequenceId = lastSequenceId + 1;
    return true;
  };

  close = async () => {
    this._logger.info(`Closing producer to topic: ${this._topic}`);
    this._created = false;
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
    if (!this._created)
      throw new errors.PulsarFlexProducerSendError({
        message: 'Cannot send messages over not created producer',
      });
    if (this._pendingMessageQueue.length === this._maxPendingMessagesQueueSize - 1)
      throw new errors.PulsarFlexProducerSendError({
        message: 'Pending messages queue size has been exceeded',
      });
    if (utils.isNil(payload)) throw new errors.PulsarFlexNoPayloadError();
    try {
      const { command } = await services.sendMessage({
        producerId: this._producerId,
        producerName: this._producerName,
        client: this._client,
        sequenceId: this._sequenceId,
        responseMediator: this._sendResponseMediator,
        payload,
        properties,
      });
      if (!utils.isNil(command.error)) throw new errors.PulsarFlexProducerSendError(command.error);
    } catch (e) {
      if (e.name === 'PulsarFlexProducerSendError') throw e;
      await new Promise(async (resolve, reject) => {
        this._logger.warn(
          `Message have been inserted to pending queue, this log can be ignored if topic have been unloaded current queue size ${this._pendingMessageQueue}`
        );
        this._pendingMessageQueue.push({
          func: () =>
            services.sendMessage({
              producerId: this._producerId,
              producerName: this._producerName,
              client: this._client,
              sequenceId: this._sequenceId,
              responseMediator: this._sendResponseMediator,
              payload,
              properties,
            }),
          resolve,
        });
      });
    }
    this._sequenceId++;
    return true;
  };

  sendBatch = async ({ messages }) => {
    console.log(messages);
    if (!this._created)
      throw new errors.PulsarFlexProducerSendError({
        message: 'Cannot send messages over not created producer',
      });
    if (utils.isNil(messages))
      throw new errors.PulsarFlexProducerSendError({
        message: 'Cannot send an empty batch, needs messages',
      });
    if (this._pendingMessageQueue.length === this._maxPendingMessagesQueueSize - 1)
      throw new errors.PulsarFlexProducerSendError({
        message: 'Pending messages queue size has been exceeded',
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
      if (!utils.isNil(command.error)) throw new errors.PulsarFlexProducerSendError(command.error);
    } catch (e) {
      if (e.name === 'PulsarFlexProducerSendError') throw e;
      await new Promise(async (resolve, reject) => {
        this._logger.warn(
          `Batch have been inserted to pending queue, this log can be ignored if topic have been unloaded current queue size ${this._pendingMessageQueue}`
        );
        this._pendingMessageQueue.push({
          func: () =>
            services.sendBatch({
              producerId: this._producerId,
              producerName: this._producerName,
              client: this._client,
              sequenceId: this._sequenceId,
              responseMediator: this._sendResponseMediator,
              messages,
            }),
          resolve,
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
