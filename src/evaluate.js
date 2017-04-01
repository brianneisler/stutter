import { doEvaluate } from './evaluator'

export default async function evaluate(ast, options) {
  return await doEvaluate(ast, options)
}
