import { SYMBOL_TO_STRING_TAG } from '../constants'
import objectForEach from './objectForEach'

const loggerLogObject = (logger, object) => {
  if (object[SYMBOL_TO_STRING_TAG]) {
    logger.write(`${object[SYMBOL_TO_STRING_TAG]} {`)
  } else {
    logger.write('Object {')
  }
  logger.indent()
  objectForEach(object, (value, key) => {
    logger.write(`${key}: `, false)
    logger.log(value)
  })
  logger.deindent()
  logger.write('}')
}

export default loggerLogObject
