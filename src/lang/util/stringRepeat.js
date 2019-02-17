import Math from './js/Math'
import Number from './js/Number'
import anyIsString from './anyIsString'

/**
 * Returns a string with `string` repeated `n` number of times
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 * @example
 *
 * stringSize('abc')
 * //=> 3
 */
const stringRepeat = (string, n) => {
  let result = ''
  if (!anyIsString(string)) {
    throw new TypeError('stringRepeat expected "string" to be a String')
  }
  if (!string || n < 1 || n > Number.MAX_SAFE_INTEGER) {
    return result
  }
  // Leverage the exponentiation by squaring algorithm for a faster repeat.
  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
  do {
    if (n % 2) {
      result += string
    }
    n = Math.floor(n / 2)
    if (n) {
      string += string
    }
  } while (n)

  return result
}

export default stringRepeat
