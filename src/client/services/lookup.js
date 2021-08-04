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
  reconnectionTimeMs,
  connectorService,
  connectorServiceResponseMediator,
  logger,
  emitter,
}) => {
  try {
    const [serviceHost, servicePort] = discoveryServers[index].split(':');
    const lookupCommand = commands.lookup({ topic, requestId });
    const discoveryCnx = await connection({
      host: serviceHost,
      port: servicePort,
      logger,
      emitter,
    });
    logger.info(
      `Connected successfully ${serviceHost}:${servicePort}, now sending connect command.`
    );
    await connectorService({
      cnx: discoveryCnx,
      jwt,
      responseMediator: connectorServiceResponseMediator,
    });
    logger.info(`Authentication to discovery service established, now will lookup topic`);
    const { command } = await discoveryCnx.sendSimpleCommandRequest(
      { command: lookupCommand },
      responseMediator
    );
    logger.info(`Closing connection to discovery connection`);
    discoveryCnx.close();
    if (command.error) throw new errors.PulsarFlexTopicLookupError({ message: command.message });
    const [protocolName, hostPort] = command.brokerserviceurl.split('://');
    const [host, port] = hostPort.split(':');

    return { host, port };
  } catch (e) {
    if ((e && e.name === 'PulsarFlexTopicLookupError') || e.name === 'PulsarFlexConnectionError')
      throw e;
    logger.warn(
      `Failed lookup topic on discovery server: ${discoveryServers[index]}, will try the next server until succeeds`,
      e
    );
    if (index >= discoveryServers.length - 1) {
      logger.info(`waiting ${reconnectionTimeMs}ms before iterating the list again`);
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
                logger,
                index: 0,
                emitter,
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
      logger,
      index: index + 1,
      emitter,
    });
  }
};

module.exports = lookup;
