import Any from './types/Any'
import Boolean from './types/Boolean'
import ImmutableCollection from './types/ImmutableCollection'
import defn from './defn'
import is from './is'

/**
 * Returns `true` if `any` is a `Collection`, or any of its subclasses.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a `Collection`, or any of its subclasses.
 * @example
 * isImmutableCollection([])
 * //=> false
 *
 * isImmutableCollection({})
 * //=> false
 *
 * isImmutableCollection(Map())
 * //=> true
 *
 * isImmutableCollection(List())
 * //=> true
 *
 * isImmutableCollection(Stack())
 * //=> true
 */
const isImmutableCollection = defn(
  'lang.isImmutableCollection',
  'Checks if `Any` is classified as an `ImmutableCollection` type.',

  [Any, () => Boolean],
  is(ImmutableCollection)
)

export default isImmutableCollection
