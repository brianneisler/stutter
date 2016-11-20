import { generateCode } from './generator'

//Go from AST back to code
export default function generate(ast, options) {
  return generateCode(ast, options)
}
