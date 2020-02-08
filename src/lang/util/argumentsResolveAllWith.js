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
 * @param {Object} context The context to execute the given Function
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
const argumentsResolveAllWith = (args, func, context) => {
  return arrayResolveAllWith(argumentsToArray(args), func, context)
}

export default argumentsResolveAllWith
