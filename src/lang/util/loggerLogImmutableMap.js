import immutableMapForEach from './immutableMapForEach'

const loggerLogImmutableMap = (logger, immutableMap) => {
  logger.write('ImmutableMap {')
  logger.indent()
  immutableMapForEach(immutableMap, (value, key) => {
    logger.write(`${key}: `, false)
    logger.log(value)
  })
  logger.deindent()
  logger.write('}')
}

export default loggerLogImmutableMap
