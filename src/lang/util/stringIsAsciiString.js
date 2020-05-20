import { ASCII_ONLY } from '../constants/Regex'

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
const stringIsAsciiString = (string) => ASCII_ONLY.test(string)

export default stringIsAsciiString
