import { baseAppend } from './append'
import arrayLikeToIterator from '../lang/arrayLikeToIterator'
import concat from './concat'
import curry from '../lang/curry'
import defn from '../lang/defn'
import errorUnexpectedType from './errors/errorUnexpectedType'
import isArray from '../lang/isArray'
import isArrayLike from '../lang/isArrayLike'
import isPromise from '../lang/isPromise'
import isString from '../lang/isString'
import iterate from '../lang/iterate'
import pipe from '../lang/pipe'
import toSeq from '../lang/toSeq'

const seqToType = (hint, seq) => {
  if (isString(hint)) {
    return seq.join('')
  }
  if (isArray(hint)) {
    return seq.toArray(seq)
  }
  return seq
}

const baseFilterAtIndex = (predicate, index, list) => {
  // const { length } = list
  // let idx = index || 0
  // if (idx < 0) {
  //   idx = length + idx
  // }
  // if (idx < 0) {
  //   idx = 0
  // }

  console.log('index:', index)
  let filtered = toSeq([])
  return iterate(
    (next) =>
      pipe(
        (pNext) => {
          if (pNext.done) {
            return
          }
          console.log('pNext:', pNext)
          return predicate(pNext.value, pNext.kdx)
        },
        (result) => {
          if (next.done) {
            return {
              ...next,
              value: seqToType(list, filtered)
            }
          }
          if (result) {
            filtered = baseAppend(next.value, filtered)
          }
          return next
        }
      )(next),
    arrayLikeToIterator(list, index)
  )

  //
  // while (idx < length) {
  //   const result = fn(list[idx], idx)
  //   if (isPromise(result)) {
  //     return result.then((resolvedResult) => {
  //       if (resolvedResult) {
  //         filtered.push(list[idx])
  //       }
  //       return concat(filtered, filterAtIndex(fn, idx + 1, list))
  //     })
  //   } else if (result) {
  //     filtered.push(list[idx])
  //   }
  //   idx += 1
  // }
  // return filtered
}

/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the same type containing the members of the given filterable which satisfy the given predicate starting from the given index. Filterable objects include plain objects or any object that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Supports async predicates. If a predicate returns a Promise than the entire method will upgrade to async and return a Promise.
 *
 * @function
 * @since v0.1.0
 * @category data
 * @param {Function} predicate The predicate function.
 * @param {Integer} index The index to start at.
 * @param {Array} list The array to consider.
 * @returns {Array} The filtered list
 * @example
 *
 * const isEven = n => n % 2 === 0
 *
 * filterAtIndex(isEven, 0, [1, 2, 3, 4])
 * //=> [2, 4]
 *
 * filterAtIndex(isEven, 2, [1, 2, 3, 4])
 * //=> [4]
 *
 * await filter(async (value) => isEven(value), [1, 2, 3, 4])
 * //=> [2, 4]
 */
const filterAtIndex = curry(
  defn('filterAtIndex', (predicate, index, list) => {
    if (!isArrayLike(list)) {
      throw errorUnexpectedType('ArrayLike', list)
    }
    return baseFilterAtIndex(predicate, index, list)
  })
)

export default filterAtIndex
