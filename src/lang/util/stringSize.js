import asciiSize from './asciiSize'
import stringIsAsciiString from './stringIsAsciiString'
import unicodeSize from './unicodeSize'

/**
 * Gets the number of symbols in `string`.
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
const stringSize = (string) =>
  stringIsAsciiString(string) ? asciiSize(string) : unicodeSize(string)

export default stringSize
