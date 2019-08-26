import { anyIsNull } from './util'
import defn from './defn'

/**
 * Checks if `any` is `null`.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is `null`, else `false`.
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(void 0)
 * // => false
 */
const isNull = (any) => any === null

export default isNull
