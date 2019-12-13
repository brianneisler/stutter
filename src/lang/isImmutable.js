import Any from './types/Any'
import Boolean from './types/Boolean'
import Immutable from './types/Immutable'
import defn from './defn'
import is from './is'
/**
 * @since v0.1.0
 * @param {Any} any The value to check.
 * @returns {Boolean} Returns `true` if `any` is an Immutable Collection or Record.
 * @example
 *
 * isImmutable([])
 * //=> false
 *
 * isImmutable({})
 * //=> false
 *
 * isImmutable(Map())
 * //=> true
 *
 * isImmutable(List())
 * //=>  true
 *
 * isImmutable(Stack())
 * //=> true
 *
 * isImmutable(Map().asMutable())
 * //=> true
 */
const isImmutable = defn(
  'isImmutable',
  'Checks if `Any` is classified as an `Immutable` type.',

  [Any, () => Boolean],
  is(Immutable)
)

export default isImmutable
