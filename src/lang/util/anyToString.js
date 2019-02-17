import { INFINITY } from '../constants'
import anyIsArray from './anyIsArray'
import anyIsSymbol from './anyIsSymbol'
import symbolToString from './symbolToString'

/**
 * Converts `any` to a `String`. An empty string is returned for `null`  and `undefined` values. The sign of `-0` is preserved.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * anyToString(null)
 * // => ''
 *
 * anyToString(-0)
 * // => '-0'
 *
 * anyToString([1, 2, 3])
 * // => '1,2,3'
 */
const anyToString = (any) => {
  if (any == null) {
    return ''
  }
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof any == 'string') {
    return any
  }
  if (anyIsArray(any)) {
    // Recursively convert values (susceptible to call stack limits).
    return `${any.map((other) => (other == null ? other : anyToString(other)))}`
  }
  if (anyIsSymbol(any)) {
    return symbolToString(any)
  }
  const result = `${any}`
  return result == '0' && 1 / any == -INFINITY ? '-0' : result
}

export default anyToString
