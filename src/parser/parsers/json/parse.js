import _ from 'mudash'
import invariant from 'invariant'
import { getKeywords, makeAst } from '../../../core'

const KEY_REGEX = /^@(.*)$/
function isKey(value) {
  return KEY_REGEX.test(value)
}
function isKeyword(code) {
  const key = firstKey(code)
  return isKey(key)
}
function getKey(code) {
  const key = firstKey(code)
  return key.match(KEY_REGEX)[1]
}
function firstKey(code) {
  return _.first(_.keys(code))
}

export default function parse(json, options) {
  return createParser(options)(json)
}

function createParser(options) {
  const { lang } = options
  const keywords = getKeywords(lang)

  function parseKeyword(code) {
    const key = getKey(code)
    const keyword = keywords[key]
    invariant(
      keyword,
      `parseKeyword: could not find keyword for key ${key}`
    )
    const payload = code[`@${key}`]
    return makeAst(keyword, payload)
  }
  //
  // function parseArray(array) {
  //   return _.map(array, parseCode)
  // }
  //
  // function parseObject(object) {
  //   return _.mapValues(object, parseCode)
  // }

  function parseCode(code) {
    if (_.isObject(code)) {
      if (isKeyword(code)) {
        return parseKeyword(code)
      }
    }
    return code
  }

  return (json) => JSON.parse(json, (key, value) => {
    if (!isKey(key)) {
      return parseCode(value)
    }
    return value
  })
}
