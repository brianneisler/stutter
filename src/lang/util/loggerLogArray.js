import arrayForEach from './arrayForEach'

const loggerLogArray = (logger, array) => {
  logger.write('Array [')
  logger.indent()
  arrayForEach(array, (value) => {
    logger.log(value)
  })
  logger.deindent()
  logger.write(']')
}

export default loggerLogArray
