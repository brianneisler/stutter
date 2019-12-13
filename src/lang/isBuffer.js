import Any from './types/Any'
import Boolean from './types/Boolean'
import Buffer from './types/Buffer'
import defn from './defn'
import is from './is'

/**
 * @since v0.1.0
 * @param {Any} any The value to check.
 * @returns {Boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * isBuffer(new Buffer(2))
 * // => true
 *
 * isBuffer(new Uint8Array(2))
 * // => false
 */
const isBuffer = defn(
  'lang.isBuffer',
  'Checks if `Any` is classified as a `Buffer` type.',

  [Any, () => Boolean],
  is(Buffer)
)

export default isBuffer
