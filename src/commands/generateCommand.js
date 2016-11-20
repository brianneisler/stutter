import { loadFile } from '../loader'
import { generate } from '../'
import { COMMAND, logger } from '../util'

export default async function parseFile(file, options) {
  try {
    const ast   = await loadFile(file)
    const code  = generate(ast, options)
    console.log(code)
  } catch(throwable) {
    logger.error(COMMAND, throwable)
    logger.debug(COMMAND, throwable.stack)
  }
}
