import String from './js/String'

const { toLowerCase } = String.prototype

/**
 * Returns the given string value converted to lower case.
 *
 * Note: known bugs with the `String.prototype.toLowerCase` method or lack of support are addressed using the core-js polyfill provided by babel
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {string} string The string to convert to lower case
 * @returns {string} A new string representing the given string converted to lower case.
 * @example
 *
 * stringToLowerCase('ABC')
 * //=> 'abc'
 */
const stringToLowerCase = (string) => toLowerCase.call(string)

export default stringToLowerCase
