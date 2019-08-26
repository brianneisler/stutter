import { anyIsInfinity } from './util'
import defn from './defn'

/**
 * Checks if `any` is `Infinity` or `-Infinity`.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `Infinity` or `-Infinity`, else `false`.
 * @example
 *
 * isInfinity(Infinity)
 * // => true
 *
 * isInfinity(-Infinity)
 * // => true
 *
 * isInfinity(new Number(Infinity))
 * // => true
 *
 * isInfinity(undefined)
 * // => false
 *
 * isInfinity(123)
 * // => false
 */
const isInfinity = defn('isInfinity', anyIsInfinity)

export default isInfinity
