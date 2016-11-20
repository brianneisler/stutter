import evaluate from '../evaluate'
import parse from '../parse'
import run from '../run'
import { logger, prompt, REPL } from '../util'

export default async function start(file, options) {
  let done = false
  let context = {}
  let result = null
  if (file) {
    result = run(file)
  }
  const schema = {
    properties: {
      code: {
        description: '>'
      }
    }
  }
  while (!done) {
    const input = await prompt(schema)
    if (input.code !== 'exit') {
      const ast = parse(input.code)
      result = await evaluate(ast, context)
      context = result.context
      logger.info(REPL, result.return)
    } else {
      done = true
    }
  }
}
