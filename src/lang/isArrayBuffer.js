import { anyIsArrayBuffer } from './util'
import defn from './defn'

/**
 * Checks if `value` is classified as an `ArrayBuffer` object.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
 * @example
 *
 * isArrayBuffer(new ArrayBuffer(2))
 * // => true
 *
 * isArrayBuffer(new Array(2))
 * // => false
 */
const isArrayBuffer = defn('isArrayBuffer', anyIsArrayBuffer)

export default isArrayBuffer
