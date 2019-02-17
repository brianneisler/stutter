import { anyIsSet } from './util'
import defn from './defn'

/**
 * Checks if `any` is classified as a `Set` object.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a set, else `false`.
 * @example
 *
 * isSet(new Set())
 * // => true
 *
 * isSet(new WeakSet())
 * // => false
 */
const isSet = defn('isSet', anyIsSet)

export default isSet
