import withCurry from './util/withCurry'
import withFns from './util/withFns'
import expect from './expect'
import fn from './fn'
import isFunction from './isFunction'
import isNumber from './isNumber'
import recompose from './recompose'


const enhance = recompose(
  withCurry(3),
  withFns({
    expect,
    isFunction,
    isNumber
  })
)

const after = enhance(({ expect, isFunction, isNumber }) => fn((func, n) => {

  return function(...args) {
    if (--n < 1) {
      return func.apply(this, args)
    }
  }
})))

export default after

import { baseSet } from './base'
import forEach from './forEach'
import isString from './isString'
import setKey from './setKey'

export default function assoc(data, key, value) {
  if (isString(path)) {
    data = baseSet(data, key, value, setKey)
  } else {
    //TODO BRN: Improve this so that it uses withMutations when making multiple modifications
    forEach(path, (pathValue, pathKey) => {
      data = baseSet(data, pathKey, pathValue, setKey)
    })
  }
  return data
}
