import { REGEX_STRING_ASCII_RANGE } from '../constants'

const regexAsciiOnly = new RegExp(`^[${REGEX_STRING_ASCII_RANGE}]*$`)

/**
 * Checks if `value` is a string made entirely of ascii characters (U+0000 - U+007F)
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `value` is a string with ascii characters only
 * @example
 *
 * stringIsAsciiString('abc')
 * // => true
 *
 * stringIsAsciiString('')
 * // => true
 *
 * stringIsAsciiString('æiou')
 * // => false
 */
const stringIsAsciiString = (string) => regexAsciiOnly.test(string)

export default stringIsAsciiString
