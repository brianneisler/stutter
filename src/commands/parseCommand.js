import { loadFile } from '../loader'
import { parse } from '../'
import { COMMAND, logger } from '../util'

export default async function parseFile(file, options) {
  try {
    const data  = await loadFile(file)
    const ast   = parse(data, { path })
    console.log(JSON.stringify(ast))
  } catch(throwable) {
    logger.error(COMMAND, throwable)
    logger.debug(COMMAND, throwable.stack)
  }
}
