const reconnect = (create, setConnected) =>
  create().catch(async () => {
    await reconnect(create, setConnected);
  });

module.exports = reconnect;
