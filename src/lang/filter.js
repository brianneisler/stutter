import { baseFilterAtIndex } from './filterAtIndex'
import { baseKeys } from './keys'
import { basePick } from './pick'
import curry from '../common/curry'
import defn from '../common/defn'
import isArrayLike from './isArrayLike'

// TODO BRN: Improve this method to maintain the original array in memory when no changes are made

const baseFilter = (fn, collection) => {
  if (isArrayLike(collection)) {
    return baseFilterAtIndex(fn, 0, collection)
  }
  return basePick(
    baseFilterAtIndex((key) => fn(collection[key], key), 0, baseKeys(collection)),
    collection
  )
}

/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the same type containing the members of the given filterable which satisfy the given predicate. Filterable objects include plain objects or any object that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Supports async predicates. If a predicate returns a Promise than the entire method will upgrade to async and return a Promise.
 *
 * @function
 * @since v0.1.0
 * @category data
 * @param {Function} fn The predicate function.
 * @param {*} collection The collection to consider.
 * @returns {*} The filtered collection
 * @example
 *
 * const isEven = n => n % 2 === 0;
 *
 * filter(isEven, [1, 2, 3, 4])
 * //=> [2, 4]
 *
 * filter(isEven, {a: 1, b: 2, c: 3, d: 4})
 * //=> {b: 2, d: 4}
 *
 * await filter(async (value) => isEven(value), [1, 2, 3, 4])
 * //=> [2, 4]
 */
const filter = curry(defn('filter', baseFilter))

export default filter

export { baseFilter }
