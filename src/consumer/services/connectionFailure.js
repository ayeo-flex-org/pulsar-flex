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
  const reconnectFunc = async () =>
    await reconnect({
      client,
      subscribe,
      cleanState,
      consumerState,
      intervalMs,
      responseMediator,
      force: false,
    });
  // Handle forceful shutdowns
  client.getCnx().addCleanUpListener(reconnectFunc);
  // Handle graceful shutdown
  client.getResponseEvents().removeAllListeners('closeConsumer');
  client.getResponseEvents().once('closeConsumer', reconnectFunc);
  console.log(client.getResponseEvents().listenerCount('closeConsumer'));
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
      console.log(e);
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
