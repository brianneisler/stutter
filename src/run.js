import _ from 'mudash'
import { loadFile } from './loader'
import parse from './parse'
import evaluate from './evaluate'
import * as lang from './lang'

export default async function run(path, options) {
  options = {
    ...options,
    lang: {
      ...lang,
      ...options.lang
    },
    path
  }
  const code = _.isString(path) ? await loadFile(path) : path
  const ast  = _.isString(code) ? parse(code, options) : code
  console.log('ast:', ast)
  return await evaluate(ast, options)
}
