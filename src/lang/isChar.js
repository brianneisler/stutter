import { anyIsChar } from './util'
import defn from './defn'

/**
 * Checks if `any` is a single character string
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a single character string.
 * @example
 *
 * isChar('a')
 * // => true
 *
 * isChar('abc')
 * // => false
 */
const isChar = defn('isChar', anyIsChar)

export default isChar
