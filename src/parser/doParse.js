import _ from 'mudash'
import invariant from 'invariant'
import * as _parsers from './parsers'

export default function doParse(code, options = {}) {
  console.log('doParse options:', options)
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
    `doParse: could not find parser for type ${type}`
  )
  return parsers[type]
}
