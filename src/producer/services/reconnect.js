const reconnect = (client, create, setConnected, { reconnectTimeout = 1000 }) => {
  const responseEvents = client.getResponseEvents();
  responseEvents.on('closeProducer', () => {
    setConnected(false);
    setTimeout(function () {
      create();
    }, reconnectTimeout);
  });
};

module.exports = reconnect;
