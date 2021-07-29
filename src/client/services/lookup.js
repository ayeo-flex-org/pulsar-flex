const commands = require('../../commands');
const errors = require('../../errors');
const connection = require('../network/connection');

const lookup = async ({
  discoveryServers,
  responseMediator,
  jwt,
  topic,
  requestId,
  index = 0,
  reconnectionTimeMs = 10000,
  connectorService,
  connectorServiceResponseMediator,
}) => {
  try {
    const [serviceHost, servicePort] = discoveryServers[index].split(':');

    const lookupCommand = commands.lookup({ topic, requestId });

    const discoveryCnx = await connection({
      host: serviceHost,
      port: servicePort,
    });

    await connectorService({
      cnx: discoveryCnx,
      jwt,
      responseMediator: connectorServiceResponseMediator,
    });

    const { command } = await discoveryCnx.sendSimpleCommandRequest(
      { command: lookupCommand },
      responseMediator
    );

    if (command.error) throw new errors.PulsarFlexTopicLookupError({ message: command.message });

    const [protocolName, hostPort] = command.brokerserviceurl.split('://');
    const [host, port] = hostPort.split(':');

    return { host, port };
  } catch (e) {
    if (e.name === 'PulsarFlexTopicLookupError' && e.name === 'PulsarFlexConnectionError') throw e;
    console.warn('Could not connect', e);
    if (index >= discoveryServers.length - 1) {
      return new Promise((resolve, reject) =>
        setTimeout(() =>
          resolve(
            lookup({
              discoveryServers,
              responseMediator,
              topic,
              jwt,
              requestId,
              connectorService,
              reconnectionTimeMs,
              connectorServiceResponseMediator,
              index: 0,
            }),
            reconnectionTimeMs
          )
        )
      );
    }
    // if any exception is met lets try to connect to another broker
    return lookup({
      discoveryServers,
      responseMediator,
      topic,
      jwt,
      requestId,
      connectorService,
      reconnectionTimeMs,
      connectorServiceResponseMediator,
      index: index + 1,
    });
  }
};

module.exports = lookup;
