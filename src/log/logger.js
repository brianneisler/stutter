import _ from 'lodash';
import { DEBUG, ERROR, INFO, TRACE, WARN } from './levels';

const logger = {
  clear: () => {
    logger.logs = [];
  },
  debug: (type, ...logs) => {
    logger.log(type, DEBUG, ...logs);
  },
  error: (type, ...logs) => {
    logger.log(type, ERROR, ...logs);
  },
  info: (type, ...logs) => {
    logger.log(type, INFO, ...logs);
  },
  logs: [],
  log: (type, level, ...logs) => {
    logger.logs.push({ type, level, logs });
    logMethod(level).call(console, `${type}:`, ...logs);
  },
  trace: (type, ...logs) => {
    logger.log(type, TRACE, ...logs);
  },
  warn: (type, ...logs) => {
    logger.log(type, WARN, ...logs);
  }
};
export default logger;

const logMethod = _.memoize((level) => {
  let method = _.get(console, _.toLower(level));
  if (!_.isFunction(method)) {
    method = console.log;
  }
  return method;
});
