const redeliverAcks = (client, acksQueue) => {
  client.getResponseEvents().on('success', async () => {
    while (acksQueue.length > 0) {
      const { func, resolve, messageIdData } = acksQueue[0];
      const result = await func();
      result && acksQueue.shift();
      resolve(result);
    }
  });
};

module.exports = redeliverAcks;
