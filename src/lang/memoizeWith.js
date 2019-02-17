import curry from './curry'
import nAry from './ary'

/**
 * A customisable version of [`memoize`](#memoize). `memoizeWith` takes an
 * additional function that will be applied to a given argument set and used to
 * create the cache key under which the results of the function to be memoized
 * will be stored. Care must be taken when implementing key generation to avoid
 * clashes that may overwrite previous entries erroneously.
 *
 *
 * @function
 * @since v0.1.0
 * @category common
 * @param {Function} mFn The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @example
 *
 * let count = 0
 * const factorial = memoizeWith(identity, n => {
 *   count += 1
 *   return product(range(1, n + 1))
 * })
 * factorial(5) //=> 120
 * factorial(5) //=> 120
 * factorial(5) //=> 120
 * count //=> 1
 */
const memoizeWith = curry((mFn, fn) => {
  const cache = new WeakMap()
  return nAry(fn.length, function() {
    const key = mFn.apply(this, arguments)
    if (!cache.has(key)) {
      cache.set(key, fn.apply(this, arguments))
    }
    return cache.get(key)
  })
})

export default memoizeWith
