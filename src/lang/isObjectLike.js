import { anyIsObjectLike } from './util'
import defn from './defn'

/**
 * Checks if `any` is object-like. A value is object-like if it's not `null` and has a `typeof` result of "object".
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is object-like, else `false`.
 * @example
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 */
const isObjectLike = defn('isObjectLike', anyIsObjectLike)

export default isObjectLike
