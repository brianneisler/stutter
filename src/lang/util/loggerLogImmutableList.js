import immutableListForEach from './immutableListForEach'

const loggerLogImmutableList = (logger, immutableList) => {
  logger.write('ImmutableList [')
  logger.indent()
  immutableListForEach(immutableList, (value) => {
    logger.log(value)
  })
  logger.deindent()
  logger.write(']')
}

export default loggerLogImmutableList
