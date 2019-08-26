import { isKeyed as immutableIsKeyed } from 'immutable'
import isArrayLike from './isArrayLike'
import isImmutable from './isImmutable'

/**
 * Returns true if `value` is considered Keyed. Keyed values include any values that implement the [`Keyed`](#Keyed) protocol or extend Immutable `Collection.Keyed`
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an [`Keyed`] value.
 * @example
 *
 * isIndexed([])
 * //=> true
 *
 * isIndexed(ImmutableList())
 * //=>  true
 *
 * isIndexed(ImmutableStack())
 * //=> true
 *
 * isIndexed({})
 * //=> false
 *
 * isIndexed(Map())
 * //=> true
 */
const isIndexed = (value) => {
  return isImmutable(value) ? immutableIsIndexed(value) : isArrayLike(value)
}

export default isIndexed
