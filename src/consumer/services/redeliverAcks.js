const redeliverAcks = (client, acksQueue) => {
  client.getResponseEvents().on('success', async () => {
    while (acksQueue.length > 0) {
      const { func, resolve } = acksQueue[acksQueue.length - 1];
      const result = await func();
      result && acksQueue.shift();
      resolve(result);
    }
  });
};

module.exports = redeliverAcks;
