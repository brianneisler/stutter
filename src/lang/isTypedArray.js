import { anyIsTypedArray } from './util'
import defn from './defn'

/**
 * Checks if `any` is classified as a typed array.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * isTypedArray(new Uint8Array())
 * // => true
 *
 * isTypedArray([])
 * // => false
 */
const isTypedArray = defn('isTypedArray', anyIsTypedArray)

export default isTypedArray
