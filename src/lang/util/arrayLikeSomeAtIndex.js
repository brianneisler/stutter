import arrayLikeIterate from './arrayLikeIterate'
import functionsPipe from './functionsPipe'

/**
 * Returns `true` if at least one of elements of the list match the predicate starting at the given index, `false` otherwise.
 *
 * Dispatches to the `arrayLikeSomeAtIndex` method of the list argument, if present.
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
 * arrayLikeSomeAtIndex(lessThan0, 0, [3, 2, 1]) //=> false
 * arrayLikeSomeAtIndex(lessThan2, 1, [3, 2, 1]) //=> true
 *
 * await arrayLikeSomeAtIndex(async (value) => lessThan2(value), 0, [1, 2]) //=> true
 */
const arrayLikeSomeAtIndex = (arrayLike, predicate, index) => {
  const { length } = arrayLike
  let idx = index || 0
  if (idx < 0) {
    idx = length + idx
  }
  if (idx < 0) {
    idx = 0
  }

  return arrayLikeIterate(
    arrayLike,
    (next) => {
      return functionsPipe(
        (pNext) => {
          if (pNext.done) {
            return false
          }
          return predicate(pNext.value, pNext.kdx)
        },
        (result) => {
          if (result || next.done) {
            return {
              ...next,
              done: true,
              value: result
            }
          }
          return next
        }
      )(next)
    },
    idx
  )
}

export default arrayLikeSomeAtIndex
