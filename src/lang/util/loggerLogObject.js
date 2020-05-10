import { TO_STRING_TAG } from '../constants/Symbol'
import objectForEach from './objectForEach'

const loggerLogObject = (logger, object) => {
  if (object[TO_STRING_TAG]) {
    logger.write(`${object[TO_STRING_TAG]} {`)
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
