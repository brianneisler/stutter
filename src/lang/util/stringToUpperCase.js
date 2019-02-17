import String from './js/String'

const { toUpperCase } = String.prototype

/**
 * Returns the given string value converted to uppercase (the value will be converted to a string if it isn't one).
 *
 * Note: known bugs with the `String.prototype.toUpperCase` method or lack of support are addressed using the core-js polyfill provided by babel
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} string The string to convert to upper case
 * @returns {string} A new string representing the given string converted to upper case.
 * @example
 *
 * stringToUpperCase('abc')
 * //=> 'ABC'
 */
const stringToUpperCase = (string) => toUpperCase.call(string)

export default stringToUpperCase
