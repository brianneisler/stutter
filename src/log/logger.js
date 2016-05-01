const logger = {
  clear: () => {
    logger.logs = [];
  },
  logs: [],
  log: (...args) => {
    logger.logs.push(args);
    console.log(...args);
  }
};
export default logger;
