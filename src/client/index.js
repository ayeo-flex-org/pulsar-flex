const emitter = require('./emitter');
const connection = require('./network/connection');
const services = require('./services');
const responsesMediator = require('../responseMediators');

class Client {
  constructor({ discoveryServers, circularReconnectionMs = 10000, jwt, logger }) {
    this._logger = logger;
    this._discoveryServers = discoveryServers;
    this._circularReconnectionMs = circularReconnectionMs;
    this._requestId = 0;
    this._jwt = jwt;
    this._cnx = null;
    this._responseMediator = null;
    this._requestIdResponseMediator = null;
    this._initMediators();
  }

  _initMediators() {
    this._responseMediator = new responsesMediator.NoIdResponseMediator({
      commands: ['connected', 'ping', 'pong', 'error'],
      client: this,
    });

    this._requestIdResponseMediator = new responsesMediator.NoIdResponseMediator({
      commands: ['lookuptopicresponse'],
      client: this,
    });
  }

  async connect({ topic }) {
    this._logger.info(`Starting to lookup topic ${topic} on ${this._discoveryServers}`);

    const { host, port } = await services.lookup({
      discoveryServers: this._discoveryServers,
      topic: topic,
      jwt: this._jwt,
      responseMediator: this._requestIdResponseMediator,
      requestId: ++this._requestId,
      connectorService: services.connector,
      connectorServiceResponseMediator: this._responseMediator,
      reconnectionTimeMs: this._circularReconnectionMs,
      logger: this._logger,
    });

    this._logger.info(`Lookup succeeded, owner is ${host}:${port}`);

    this._cnx = await connection({ host, port, logger: this._logger });
    await services.connector({
      cnx: this._cnx,
      responseMediator: this._responseMediator,
      jwt: this._jwt,
      logger: this._logger,
    });
    const cleanUpPinger = services.pinger({
      cnx: this._cnx,
      pingingIntervalMs: 60000,
      responseMediator: this._responseMediator,
      logger: this._logger,
    });
    const cleanUpPonger = services.ponger({
      cnx: this._cnx,
      responseMediator: this._responseMediator,
      logger: this._logger,
    });

    this._cnx.addCleanUpListener(cleanUpPonger);
    this._cnx.addCleanUpListener(cleanUpPinger);
  }

  getCnx() {
    return this._cnx;
  }

  getResponseEvents() {
    return emitter.data;
  }
}

module.exports = Client;
