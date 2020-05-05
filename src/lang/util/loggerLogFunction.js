import anyToName from './anyToName'

const loggerLogFunction = (logger, func) => {
  logger.write(`${anyToName(func) ? anyToName(func) + ' ' : ''}() => {}`)
}

export default loggerLogFunction
