import Any from './types/Any'
import Array from './types/Array'
import Boolean from './types/Boolean'
import defn from './defn'
import is from './is'

/**
 * @since v0.1.0
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * isArray([1, 2, 3])
 * //=> true
 *
 * isArray(document.body.children)
 * //=> false
 *
 * isArray('abc')
 * //=> false
 *
 * isArray(noop)
 * //=> false
 */
const isArray = defn(
  'lang.isArray',
  'Checks if `Any` is classified as an `Array` type.',

  [Any, () => Boolean],
  is(Array)
)

export default isArray
