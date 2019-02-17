import cacheChain from './cacheChain'
import functionCopyMeta from './functionCopyMeta'
import functionMemoizeWith from './functionMemoizeWith'

/**
 * Creates a new function that, when invoked, caches the result of calling `fn` for a given argument set and returns the result. Subsequent calls to the memoized `fn` with the same argument set will not result in an additional call to `fn`; instead, the cached result for that set of arguments will be returned.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @example
 *
 * let count = 0
 * const factorial = memoize(n => {
 *   count += 1
 *   return product(range(1, n + 1))
 * })
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
const functionMemoize = (fn) => functionMemoizeWith(fn, cacheChain, functionCopyMeta)

export default functionMemoize
