import concat from './concat'
import curry from '../common/curry'
import isObjectLike from './isObjectLike'
import pipe from '../common/pipe'
import reduce from './reduce'
import resolve from '../common/resolve'
import walk from './walk'

const reduceWalkee = () => {
  const visited = new Set()
  return (accum, value, keys, iteratee, recur) => {
    return pipe(
      (result) => iteratee(result, value, keys),
      (result) => {
        const resolvedValue = resolve(value)
        if (isObjectLike(resolvedValue) && !visited.has(resolvedValue)) {
          visited.add(resolvedValue)
          return reduce(
            (accumResult, child, childPik) => {
              const newKeys = concat(keys, [childPik])
              return recur(accumResult, child, newKeys, iteratee)
            },
            result,
            resolvedValue
          )
        }
        return result
      }
    )(accum)
  }
}

/**
 * Walk reduce using the given reducer function
 *
 * NOTE: This method will resolve values during the walk before iterating and walking them.
 *
 * @function
 * @since v0.1.0
 * @category data
 * @param {Function} fn The iterator function. Receives three values, the accumulator and the current element from the walk and the current set of keys from the entire depth of the walk.
 * @param {*} accum The accumulator value.
 * @param {*} collection The collection to walk.
 * @returns {*} The final, accumulated value.
 * @example
 *
 * walkReduce(
 *   (accum, value, keys) => {
 *     if (!isObject(value)) {
 *       return accum + toString(value)
 *     }
 *     return accum
 *   },
 *   '',
 *   {
 *     a: {
 *       b: 'b',
 *       c: {
 *         d: 'd'
 *       }
 *     },
 *     e: [ 'e', 'f' ]
 *   }
 * )
 * //=> 'bdef'
 */
const walkReduce = curry((iteratee, accum, collection) =>
  walk(reduceWalkee(), iteratee, accum, collection, [])
)

export default walkReduce
