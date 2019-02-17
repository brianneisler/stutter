import { anyIsWeakMap } from './util'
import defn from './defn'

/**
 * Checks if `any` is classified as a `WeakMap` object.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
 * @example
 *
 * isWeakMap(new WeakMap())
 * // => true
 *
 * isWeakMap(new Map())
 * // => false
 */
const isWeakMap = defn('isWeakMap', anyIsWeakMap)

export default isWeakMap
