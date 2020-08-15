import anyResolveWith from './anyResolveWith'
import arrayLikeIterateInSeries from './arrayLikeIterateInSeries'

/**
 * Resolves all async values in an Array and executes the given with
 * the result
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Array} array The Array whose values should be resolved.
 * @param {Function} func The function to execute at the end of the resolution
 * @param {Object} context The context to execute the given Function
 * @returns {Array} The Array with its values resolved
 * @example
 *
 * const array = [1, Promise.resolve(2), (async () => 3)()]
 * await arrayResolveAllWith(
 *   array,
 *   (resolvedNums) => 'foo', // [ 1, 2, 3 ]
 * ) // => 'foo'
 */
const arrayResolveAllWith = (array, func, context) => {
  const result = []
  return anyResolveWith(
    arrayLikeIterateInSeries(array, (next) => {
      if (next.done) {
        return {
          ...next,
          value: result
        }
      }
      return anyResolveWith(next.value, (nextValue) => {
        result[next.pik] = nextValue
        return next
      })
    }),
    (resolved) => func.apply(context, resolved)
  )
}

export default arrayResolveAllWith
