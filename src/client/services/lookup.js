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
    console.log('1');
    const [serviceHost, servicePort] = discoveryServers[index].split(':');
    console.log('2');
    const lookupCommand = commands.lookup({ topic, requestId });
    console.log('3');
    const discoveryCnx = await connection({ host: serviceHost, port: servicePort });
    console.log('4');
    await connectorService({
      cnx: discoveryCnx,
      jwt,
      responseMediator: connectorServiceResponseMediator,
    });
    console.log('5');
    const { command } = await discoveryCnx.sendSimpleCommandRequest(
      { command: lookupCommand },
      responseMediator
    );
    console.log('6');
    discoveryCnx.close();
    console.log('7');
    if (command.error) throw new errors.PulsarFlexTopicLookupError({ message: command.message });
    const [protocolName, hostPort] = command.brokerserviceurl.split('://');
    const [host, port] = hostPort.split(':');

    return { host, port };
  } catch (e) {
    if ((e && e.name === 'PulsarFlexTopicLookupError') || e.name === 'PulsarFlexConnectionError')
      throw e;
    console.warn('Could not connect', e);
    if (index >= discoveryServers.length - 1) {
      return new Promise((resolve, reject) =>
        setTimeout(
          () =>
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
              })
            ),
          reconnectionTimeMs
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
