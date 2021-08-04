const resendMessages = (client, messageQueue, logger) => {
  client.getResponseEvents().on('producerSuccess', async () => {
    logger.info('Starting resend message progress');

    while (messageQueue.length > 0) {
      logger.info(`De queueing message from messageQueue current length ${messageQueue.length}`);
      const { func, resolve } = messageQueue[0];
      const result = await func();

      logger.info(`De queued message successfully`);
      result && messageQueue.shift();
      resolve(result);
    }
  });
};

module.exports = resendMessages;
