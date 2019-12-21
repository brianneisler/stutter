import anyIterate from './anyIterate'
import anyResolveWith from './anyResolveWith'

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
 * @returns {Array} The Array with its values resolved
 * @example
 *
 * await argumentsResolveAllWith(
 *   arguments,
 *   (resolvedNums) => 'foo', // [ 1, 2, 3 ]
 * )
 *
 * await func(1, Promise.resolve(2), (async () => 3)())
 * // => 'foo'
 */
const arrayResolveAllWith = (args, func) => {
  const result = []
  return anyResolveWith(
    anyIterate(args, (next) => {
      if (next.done) {
        return {
          ...next,
          value: result
        }
      }
      return anyResolveWith(next.value, (nextValue) => {
        result[next.kdx] = nextValue
        return next
      })
    }),
    func
  )
}

export default arrayResolveAllWith
