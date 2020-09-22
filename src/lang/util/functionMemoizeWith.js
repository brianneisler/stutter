import WeakMap from '../classes/WeakMap'

import cacheChain from './cacheChain'
import functionDefineLength from './functionDefineLength'

/**
 * A customisable version of [`functionMemoize`](#functionMemoize).
 * `functionMemoizeWith` takes an additional function that will be applied to a
 * given argument set and used to create the cache key under which the results
 * of the function to be memoized will be stored. Care must be taken when
 * implementing key generation to avoid clashes that may overwrite previous
 * entries erroneously.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to memoize.
 * @param {Function} cacheFunc The function to generate the cache key.
 * @return {Function} Memoized version of `func`.
 * @example
 *
 * let count = 0
 * const factorial = functionMemoizeWith(n => {
 *   count += 1
 *   return product(range(1, n + 1))
 * }, identity)
 *
 * factorial(5)
 * //=> 120
 *
 * factorial(5)
 * //=> 120
 *
 * factorial(5)
 * //=> 120
 *
 * count
 * //=> 1
 */
const functionMemoizeWith = (func, cacheFunc = cacheChain) => {
  const cache = new WeakMap()
  return functionDefineLength(function () {
    const key = cacheFunc.apply(this, arguments)
    if (!cache.has(key)) {
      cache.set(key, func.apply(this, arguments))
    }
    return cache.get(key)
  }, func.length)
}

export default functionMemoizeWith
