const commands = require('../../commands');
const errors = require('../../errors');
const utils = require('../../utils');

const subscribe = async ({
  topic,
  subscription,
  subType,
  consumerId,
  consumerName,
  readCompacted,
  requestId,
  responseMediator,
}) => {
  const subscribeCommand = commands.subscribe({
    topic,
    subscription,
    subType,
    consumerId,
    consumerName,
    readCompacted,
    requestId,
  });
  const { command } = await this.client
    .getCnx()
    .sendSimpleCommandRequest({ command: subscribeCommand }, responseMediator);
  if (!utils.isNil(command.error)) throw new errors.PulsarFlexSubscribeError(command.message);
  return { command };
};

module.exports = subscribe;
