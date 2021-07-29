const commands = require('../../commands');
const errors = require('../../errors');

const connector = async ({ cnx, responseMediator, jwt }) => {
  const connectCommand = commands.connect({ protocolVersion: 17, jwt });

  const { command } = await cnx.sendSimpleCommandRequest(
    { command: connectCommand },
    responseMediator
  );

  if (command.error) throw new errors.PulsarFlexConnectionError({ message: command.message });

  return true;
};

module.exports = connector;
