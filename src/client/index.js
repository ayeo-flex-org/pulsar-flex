const emitter = require('./emitter');
const connection = require('./network/connection');
const services = require('./services');
const responsesMediator = require('../responseMediators');

class Client {
  constructor({ serviceDiscovery, timeout, jwt }) {
    this._serviceDiscovery = serviceDiscovery;
    this._timeout = timeout;
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
    const [serviceDiscoveryHost, serviceDiscoveryPort] = this._serviceDiscovery.split(':');
    const discoveryCnx = await connection({
      host: serviceDiscoveryHost,
      port: serviceDiscoveryPort,
    });

    await services.connector({
      cnx: discoveryCnx,
      responseMediator: this._responseMediator,
      jwt: this._jwt,
    });

    const { host, port } = await services.lookup({
      discoveryCnx,
      topic: topic,
      responseMediator: this._requestIdResponseMediator,
      requestId: ++this._requestId,
    });

    discoveryCnx.close();

    this._cnx = await connection({ host, port });

    await services.connector({
      cnx: this._cnx,
      responseMediator: this._responseMediator,
      jwt: this._jwt,
    });

    services.pinger({
      cnx: this._cnx,
      pingingIntervalMs: 60000,
      responseMediator: this._responseMediator,
    });
    services.ponger({ cnx: this._cnx, responseMediator: this._responseMediator });
  }

  getCnx() {
    return this._cnx;
  }

  getResponseEvents() {
    return emitter.data;
  }
}

module.exports = Client;
