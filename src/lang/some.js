import Any from './types/Any'
import Array from './types/Array'
import ImmutableList from './types/ImmutableList'
import ImmutableMap from './types/ImmutableMap'
import Index from './types/IndexType'
import Key from './types/Key'
import Map from './types/Map'
import Object from './types/Object'
import anyAtIndex from './util/indexedSomeAtIndex'
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
 * any(lessThan0)([1, 2]) //=> false
 * any(lessThan2)([1, 2]) //=> true
 * any(lessThan2)({ a: 1, b: 2 }) //=> true
 *
 * await any(async (value) => lessThan2(value), [1, 2]) //=> true
 */
const any = defn(
  'any',
  'Returns `true` if at least one of elements of the collection match the predicate, `false` otherwise.',

  [Function, Array, Index, () => Boolean],

  [Array, Index, Function, () => Boolean],

  [Function, Array, () => Boolean],

  [Array, Function, () => Boolean],

  [Function, ImmutableList, Index, () => Boolean],
  (func, immutableList, index) => immutableList.delete(index),

  [ImmutableList, Index, Function, () => Boolean],
  (immutableList, index, func) => immutableList.delete(index),

  [Function, Object],

  [Object, Function],

  (fn, collection) => {
    if (isArrayLike(collection)) {
      return anyAtIndex(fn, 0, collection)
    }
    return anyAtIndex((key) => fn(collection[key], key), 0, keys(collection))
  }
)

export default any
