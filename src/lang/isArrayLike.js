import Any from './types/Any'
import ArrayLike from './types/ArrayLike'
import Boolean from './types/Boolean'
import defn from './defn'
import is from './is'

/**
 * @since v0.1.0
 * @param {Any} any The value to check.
 * @returns {Boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike(document.body.children)
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(Function)
 * // => false
 */
const isArrayLike = defn(
  'lang.isArrayLike',
  'Checks if `Any` is classified as an `ArrayLike` type.',

  [Any, () => Boolean],
  is(ArrayLike)
)

export default isArrayLike
