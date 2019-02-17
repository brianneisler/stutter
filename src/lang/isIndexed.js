import { isIndexed as immutableIsIndexed } from 'immutable'
import isArrayLike from './isArrayLike'
import isImmutable from './isImmutable'

/**
 * Returns true if `value` is considered indexed. Indexed values include array like values and Immutable `Collection.Indexed` values
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `Indexed` value.
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
