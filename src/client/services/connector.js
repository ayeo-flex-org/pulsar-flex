const commands = require('../../commands');
const errors = require('../../errors');

const connector = async ({ cnx, responseMediator, jwt }) => {
  console.log('a');
  const connectCommand = commands.connect({ protocolVersion: 17, jwt });
  console.log('b');
  const { command } = await cnx.sendSimpleCommandRequest(
    { command: connectCommand },
    responseMediator
  );
  console.log('c');
  if (command.error) throw new errors.PulsarFlexConnectionError({ message: command.message });
  console.log('d');
  return true;
};

module.exports = connector;
