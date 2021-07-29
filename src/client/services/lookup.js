const commands = require('../../commands');
const errors = require('../../errors');

const lookup = async ({ discoveryCnx, responseMediator, topic, requestId }) => {
  const lookupCommand = commands.lookup({ topic, requestId });

  const { command } = await discoveryCnx.sendSimpleCommandRequest(
    { command: lookupCommand },
    responseMediator
  );
  if (command.error) throw new errors.PulsarFlexTopicLookupError({ message: command.message });
  const [protocolName, hostPort] = command.brokerserviceurl.split('://');
  const [host, port] = hostPort.split(':');

  return { host, port };
};

module.exports = lookup;
