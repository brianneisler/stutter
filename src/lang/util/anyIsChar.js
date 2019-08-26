import anyIsString from './anyIsString'

/**
 * Checks if `any` is a single character string
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `value` is a single character string.
 * @example
 *
 * isChar('a')
 * // => true
 *
 * isChar('abc')
 * // => false
 */
const isChar = (any) => anyIsString(any) && any.length === 1

export default isChar
