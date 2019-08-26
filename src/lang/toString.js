import { INFINITY } from '../constants'
import isArray from './isArray'
import isPromise from './isPromise'
import isSymbol from './isSymbol'
import symbolToString from './symbolToString'

/**
 * Converts `value` to a string. An empty string is returned for `null`  and `undefined` values. The sign of `-0` is preserved.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */
const toString = (value) => {
  if (isPromise(value)) {
    return value.then((resolvedValue) => toString(resolvedValue))
  }
  if (value == null) {
    return ''
  }
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return `${value.map((other) => (other == null ? other : toString(other)))}`
  }
  if (isSymbol(value)) {
    return symbolToString(value)
  }
  const result = `${value}`
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

export default toString
