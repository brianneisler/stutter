import anyResolveAll from './anyResolveAll'
import anyResolveWith from './anyResolveWith'

/**
 * Resolves all async values in an array or object and executes the given with
 * the result
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The array or object whose values should be resolved. If
 * value is not an object or array, the value is simply resolved to itself
 * @param {Function} func The function to execute at the end of the resolution
 * @returns {*} The array or object with its values resolved
 * @example
 *
 * const nums = [
 *   1,
 *   Promise.resolve(2),
 *   (async () => 3)()
 * ]
 * await anyResolveAllWith(
 *   (resolvedNums) => 'foo', // [ 1, 2, 3 ]
 *   nums
 * )
 * // => 'foo'
 *
 * const keyed = {
 *   a: 1,
 *   b: Promise.resolve(2),
 *   c: (async () => 3)()
 * }
 *
 * await anyResolveAllWith(
 *   (resolvedNums) => 'foo', // { a: 1, b: 2, c: 3 }
 *   keyed
 * )
 * // => 'foo'
 *
 * anyResolveAllWith(
 *   (resolvedNums) => 'foo', // [ 1, 2, 3 ]
 *   [ 1, 2, 3 ]
 * )
 * // => 'foo'
 */
const anyResolveAllWith = (any, func, iterateFunc, setFunc) =>
  anyResolveWith(anyResolveAll(any, iterateFunc, setFunc), func)

export default anyResolveAllWith
