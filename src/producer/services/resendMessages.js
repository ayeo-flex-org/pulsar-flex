const resendMessages = (client, messageQueue) => {
  client.getResponseEvents().on('producerSuccess', async () => {
    while (messageQueue.length > 0) {
      const { func, resolve } = messageQueue[messageQueue.length - 1];
      const result = await func();
      console.log(result);
      result && messageQueue.shift();
      resolve(result);
    }
  });
};

module.exports = resendMessages;
