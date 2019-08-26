import replaceFirstWith from './replaceFirstWith'
import toUpperCase from './toUpperCase'

/**
 * Converts the first character of `string` to upper case.
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase
 * @example
 *
 * upperFirst('fred')
 * // => 'Fred'
 *
 * upperFirst('FRED')
 * // => 'FRED'
 */
const upperFirst = replaceFirstWith(toUpperCase)

export default upperFirst
