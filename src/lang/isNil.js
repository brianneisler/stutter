import { anyIsNil } from './util'
import defn from './defn'

/**
 * Checks if `any` is `null` or `undefined`.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is nullish, else `false`.
 * @example
 *
 * isNil(null) // => true
 *
 * isNil(void 0) // => true
 *
 * isNil(NaN) // => false
 */
const isNil = defn('isNil', anyIsNil)

export default isNil
