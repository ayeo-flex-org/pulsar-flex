const redeliverAcks = (client, acksQueue, logger) => {
  client.getResponseEvents().on('success', async () => {
    while (acksQueue.length > 0) {
      const { func, resolve, messageIdData } = acksQueue[0];
      logger.info(
        `Re-delivering ack of message ledger id: ${messageIdData.ledgerid} entry id: ${messageIdData.entryid}`
      );
      const result = await func();
      result && acksQueue.shift();
      resolve(result);
    }
  });
};

module.exports = redeliverAcks;
