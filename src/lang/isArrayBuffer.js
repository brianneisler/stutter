import Any from './types/Any'
import ArrayBuffer from './types/ArrayBuffer'
import Boolean from './types/Boolean'
import defn from './defn'
import is from './is'

/**
 * @since v0.1.0
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
const isArrayBuffer = defn(
  'lang.isArrayBuffer',
  'Checks if `Any` is classified as an `ArrayBuffer` type.',

  [Any, () => Boolean],
  is(ArrayBuffer)
)

export default isArrayBuffer
