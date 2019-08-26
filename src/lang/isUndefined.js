import { anyIsUndefined } from './util'
import defn from './defn'

/**
 * Checks if `any` is `undefined`.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is `undefined`, else `false`.
 * @example
 *
 * isUndefined(void 0)
 * // => true
 *
 * isUndefined(null)
 * // => false
 */
const isUndefined = defn('isUndefined', anyIsUndefined)

export default isUndefined
