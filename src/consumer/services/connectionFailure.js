const utils = require('../../utils');
const errors = require('../../errors')

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
        subscribe,
        cleanState,
        consumerState,
        intervalMs,
      })
  );
  // Handle graceful shutdown
  client.getResponseEvents().on('closeConsumer', async () => {
    responseMediator.purgeRequests({ error: errors.PulsarFlexConsumerCloseError });
    await reconnect();
  });
};

const reconnect = async ({ subscribe, cleanState, consumerState, intervalMs }) => {
  if (consumerState.get() !== consumerState.states.UNSUBSCRIBED) {
    consumerState.set(consumerState.states.ERROR);
    cleanState();
    await subscribe().catch(async () => {
      await utils.sleep(intervalMs);
      await reconnect({ subscribe, cleanState, intervalMs });
    });
  }
};

module.exports = connectionFailure;
