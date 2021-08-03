const utils = require('../../utils');
const errors = require('../../errors');

const connectionFailure = ({
  client,
  subscribe,
  cleanState,
  consumerState,
  intervalMs,
  responseMediator,
}) => {
  // Handle forceful shutdowns
  client.getCnx().addCleanUpListener(
    async () =>
      await reconnect({
        client,
        subscribe,
        cleanState,
        consumerState,
        intervalMs,
        responseMediator,
        force: false,
      })
  );
  // Handle graceful shutdown
  client.getResponseEvents().once('closeConsumer', async () => {
    await reconnect({
      client,
      subscribe,
      cleanState,
      consumerState,
      intervalMs,
      responseMediator,
      force: false,
    });
  });
};

const reconnect = async ({
  client,
  subscribe,
  cleanState,
  consumerState,
  intervalMs,
  responseMediator,
  force = false,
}) => {
  if (
    (consumerState.get() !== consumerState.states.UNSUBSCRIBED &&
      consumerState.get() !== consumerState.states.RECONNECTING) ||
    force
  ) {
    client.getCnx().close();
    responseMediator.purgeRequests({ error: errors.PulsarFlexConsumerCloseError });
    consumerState.set(consumerState.states.RECONNECTING);
    cleanState();
    subscribe().catch(async (e) => {
      await utils.sleep(intervalMs);
      await reconnect({
        client,
        subscribe,
        cleanState,
        consumerState,
        intervalMs,
        responseMediator,
        force: true,
      });
    });
  }
};

module.exports = connectionFailure;
