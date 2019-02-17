import asciiToArray from './asciiToArray'
import stringIsAsciiString from './stringIsAsciiString'
import unicodeToArray from './unicodeToArray'

/**
 * Converts `string` to an array.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {string} string The string to convert.
 * @returns {number} Returns the converted array.
 * @example
 *
 * stringToArray('abc')
 * //=> ['a', 'b', 'c']
 */
const stringToArray = (string) =>
  stringIsAsciiString(string) ? asciiToArray(string) : unicodeToArray(string)

export default stringToArray
