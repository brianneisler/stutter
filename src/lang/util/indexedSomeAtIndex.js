import curry from '../common/curry'
import defunc from '../common/defunc'
import errorUnexpectedType from './errors/errorUnexpectedType'
import isArrayLike from '../isArrayLike'
import isPromise from '../isPromise'

// TODO BRN: Merge this with `any`
/**
 * Returns `true` if at least one of elements of the list match the predicate starting at the given index, `false` otherwise.
 *
 * Dispatches to the `anyAtIndex` method of the list argument, if present.
 *
 * Supports async predicates. If a predicate returns a Promise than the entire method will upgrade to async and return a Promise.
 *
 * @function
 * @since v0.1.0
 * @category data
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} func The predicate function.
 * @param {Integer} index The index to start at.
 * @param {Array} list The array to consider.
 * @returns {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @example
 *
 * const lessThan0 = flip(lt)(0)
 * const lessThan2 = flip(lt)(2)
 * anyAtIndex(lessThan0, 0, [3, 2, 1]) //=> false
 * anyAtIndex(lessThan2, 1, [3, 2, 1]) //=> true
 *
 * await anyAtIndex(async (value) => lessThan2(value), 0, [1, 2]) //=> true
 */
const indexedSomeAtIndex = (func, index) => {
  const { length } = list
  let idx = index || 0
  if (idx < 0) {
    idx = length + idx
  }
  if (idx < 0) {
    idx = 0
  }

  while (idx < length) {
    const result = func(list[idx], idx)
    if (isPromise(result)) {
      return result.then((resolvedResult) => {
        if (resolvedResult) {
          return true
        }
        return anySomeAtIndex(func, idx + 1, list)
      })
    } else if (result) {
      return true
    }
    idx += 1
  }
  return false
}

export default indexedSomeAtIndex
