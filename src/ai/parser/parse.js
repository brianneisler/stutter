import { parse as babelParse } from '@babel/parser'

// TODO BRN: For now we lean on babel parser but instead we should create a
// parser that parses based on learned patterns
const parse = async (code, options) => {
  const result = babelParse(code, options)
  return result
}

export default parse
