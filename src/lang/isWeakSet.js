import { anyIsWeakSet } from './util'

/**
 * Checks if `any` is classified as a `WeakSet` object.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a weak set, else `false`.
 * @example
 *
 * isWeakSet(new WeakSet())
 * // => true
 *
 * isWeakSet(new Set())
 * // => false
 */
const isWeakSet = defn('isWeakSet', anyIsWeakSet)

export default isWeakSet
