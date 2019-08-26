import { anyIsBoolean } from './util'
import defn from './defn'

/**
 * Checks if `any` is classified as a boolean primitive or object.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(null)
 * // => false
 */
const isBoolean = defn('isBoolean', anyIsBoolean)

export default isBoolean
