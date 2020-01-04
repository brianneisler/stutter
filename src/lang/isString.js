// required
import { anyIsString } from './util'
import defn from './defn'

/**
 * Checks if `any` is classified as a `String` primitive or object.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * isString('abc')
 * // => true
 *
 * isString(1)
 * // => false
 */
const isString = defn('isString', anyIsString)

export default isString
