import { run } from '../'
import { COMMAND, logger } from '../util'

export default async function runProgram(file, options) {
  try {
    await run(file, options)
  } catch(throwable) {
    logger.error(COMMAND, throwable)
    logger.debug(COMMAND, throwable.stack)
  }
}
