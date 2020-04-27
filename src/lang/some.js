import Any from './types/Any'
import Array from './types/Array'
import ImmutableList from './types/ImmutableList'
import ImmutableMap from './types/ImmutableMap'
import Index from './types/IndexType'
import Key from './types/Key'
import Map from './types/Map'
import Object from './types/Object'
import arrayLikeSomeAtIndex from './util/arrayLikeSomeAtIndex'
import defn from './defn'
import isArrayLike from './isArrayLike'
import keys from './keys'

/**
 * @since v0.1.0
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {*} collection The collection to consider.
 * @returns {Boolean} `true` if the predicate is satisfied by at least one element, `false` otherwise.
 * @example
 *
 * const lessThan0 = flip(lt)(0)
 * const lessThan2 = flip(lt)(2)
 * some(lessThan0)([1, 2]) //=> false
 * some(lessThan2)([1, 2]) //=> true
 * some(lessThan2)({ a: 1, b: 2 }) //=> true
 *
 * await some(async (value) => lessThan2(value), [1, 2]) //=> true
 */
const some = defn(
  'lang.some',
  {
    description:
      'Returns `true` if at least one of elements of the collection match the predicate, `false` otherwise.',
    since: 'v0.2.0'
  },

  [Function, Array, Index, () => Boolean],
  (func, array, index) => arrayLikeSomeAtIndex(array, func, index),

  [Array, Index, Function, () => Boolean],
  (array, index, func) => arrayLikeSomeAtIndex(array, func, index),

  [Function, Array, () => Boolean],
  (func, array) => arrayLikeSomeAtIndex(array, func, 0),

  [Array, Function, () => Boolean],
  (array, func) => arrayLikeSomeAtIndex(array, func, 0),

  [Function, ImmutableList, Index, () => Boolean],
  (func, immutableList, index) => immutableList.delete(index),

  [ImmutableList, Index, Function, () => Boolean],
  (immutableList, index, func) => immutableList.delete(index),

  [Function, Object],

  [Object, Function]
)

export default some
