const reconnect = (client, create, setConnected, { reconnectTimeout = 1000 }) => {
  const responseEvents = client.getResponseEvents();
  responseEvents.on('closeProducer', () => {
    setConnected(false);
    client.getCnx().close();

    create()
      .then(setConnected(true))
      .catch(() => console.log('Should handle when no reconnected successfully'));
  });
};

module.exports = reconnect;
