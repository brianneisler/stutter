import argumentsToArray from './argumentsToArray'
import arrayResolveAllWith from './arrayResolveAllWith'
import arrayToArguments from './arrayToArguments'

/**
 * Resolves all async values in an Arguments object and executes the given with
 * the result
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Arguments} args The Arguments whose values should be resolved.
 * @param {Function} func The function to execute at the end of the resolution
 * @returns {Array} The Arguments with its values resolved
 * @example
 *
 * const func = async () => {
 *   await argumentsResolveAllWith(
 *     arguments,
 *     (resolvedNums) => 'foo', // [ 1, 2, 3 ]
 *   )
 * }
 * await func(1, Promise.resolve(2), (async () => 3)())
 * // => 'foo'
 */
const argumentsResolveAllWith = (args, func) => {
  return arrayResolveAllWith(argumentsToArray(args), (resolved) => func(arrayToArguments(resolved)))
}

export default argumentsResolveAllWith()
