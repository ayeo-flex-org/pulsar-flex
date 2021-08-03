const LEVELS = {
  NOTHING: 0,
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  DEBUG: 4,
  TRACE: 5,
};

const createLevel = (label, level, currentLevel, namespace, logFunction) => (message) => {
  if (level > currentLevel) return;
  logFunction({
    namespace,
    level,
    label,
    log: {
      timestamp: new Date().toISOString(),
      logger: 'pulsar-flex',
      message,
    },
  });
};

const createLogger = ({ logLevel = LEVELS.INFO, logCreator } = {}) => {
  const logFunction = logCreator(logLevel);

  const createLogFunctions = (namespace) => {
    return {
      info: createLevel('INFO', LEVELS.INFO, logLevel, namespace, logFunction),
      error: createLevel('ERROR', LEVELS.ERROR, logLevel, namespace, logFunction),
      warn: createLevel('WARN', LEVELS.WARN, logLevel, namespace, logFunction),
      debug: createLevel('DEBUG', LEVELS.DEBUG, logLevel, namespace, logFunction),
      trace: createLevel('TRACE', LEVELS.TRACE, logLevel, namespace, logFunction),
    };
  };

  return createLogFunctions();
};

module.exports = {
  LEVELS,
  createLogger,
};
