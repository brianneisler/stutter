import _ from 'mudash'
import invariant from 'invariant'
import * as _parsers from './parsers'

export default function parseCode(code, options = {}) {
  console.log('parseCode options:', options)
  const { type } = options
  const parsers = {
    ..._parsers,
    ...options.parsers
  }
  return parser(parsers, type).parse(code, options)
}

function parser(parsers, type = 'js') {
  invariant(
    _.has(parsers, type),
    `parseCode: could not find parser for type ${type}`
  )
  return parsers[type]
}
