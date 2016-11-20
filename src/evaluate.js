import { evalAst } from './evaluator'

export default async function evaluate(ast, options) {
  return await evalAst(ast, options)
}
