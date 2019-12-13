import Any from './types/Any'
import Boolean from './types/Boolean'
import Index from './types/IndexType'
import defn from './defn'
import is from './is'

/**
 * @since v0.1.0
 * @param {Any} any The value to check.
 * @returns {Boolean} Returns `true` if `Any` is a valid Index, else `false`.
 * @example
 *
 * isIndex(0)
 * //=> true
 *
 * isIndex(1)
 * //=> true
 *
 * isIndex(-1)
 * //=> false
 */
const isIndex = defn(
  'lang.isIndex',
  'Checks if `Any` is classified as an `Index` type.',

  [Any, () => Boolean],
  is(Index)
)

export default isIndex
