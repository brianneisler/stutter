import Any from './types/Any'
import Function from './types/Function'
import anyResolveAllWith from './util/anyResolveAllWith'
import contagion from './contagion'
import defn from './defn'
import iterate from './iterate'
import set from './set'

/**
 * Resolves all async values in an Iterable data object and executes the given `fn` with the result
 *
 * Auto curried for placeholder support.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {Function} func The function to execute at the end of the resolution
 * @param {*} any The array or object whose values should be resolved. If value is not an object or array, the value is simply resolved to itself
 * @returns {*} The array or object with its values resolved
 * @example
 *
 * const nums = [
 *   1,
 *   Promise.resolve(2),
 *   (async () => 3)()
 * ]
 * await allWith(
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
 * await allWith(
 *   (resolvedNums) => 'foo', // { a: 1, b: 2, c: 3 }
 *   keyed
 * )
 * // => 'foo'
 *
 * allWith(
 *   (resolvedNums) => 'foo', // [ 1, 2, 3 ]
 *   [ 1, 2, 3 ]
 * )
 * // => 'foo'
 */
const allWith = defn(
  'lang.allWith',
  'Resolves all async values in an Iterable data object and executes the given `fn` with the result',

  [Any, Function, () => Any],
  (any, func) => anyResolveAllWith(any, func, contagion, iterate, set),

  [Function, Any, () => Any],
  (func, any) => anyResolveAllWith(any, func, contagion, iterate, set)
)

export default allWith
