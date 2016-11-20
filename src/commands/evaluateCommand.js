import { loadFile } from '../loader'
import { evaluate } from '../'
import { COMMAND, logger } from '../util'

export default async function evaluateCommand(file, options) {
  try {
    const ast  = await loadFile(file)
    await evaluate(ast, {})
  } catch(throwable) {
    logger.error(COMMAND, throwable)
    logger.debug(COMMAND, throwable.stack)
  }
}
