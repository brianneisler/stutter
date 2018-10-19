import { MapCache } from './cache'
import { ERROR_TEXT_FUNC } from './constants'

export default function memoize(func, resolver, Cache) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(ERROR_TEXT_FUNC)
  }
  const memoized = function(...args) {
    const key = resolver ? resolver.apply(this, args) : args[0]
    const { cache } = memoized

    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = func.apply(this, args)
    memoized.cache = cache.set(key, result) || cache
    return result
  }
  memoized.cache = new (Cache || memoize.Cache || MapCache)
  return memoized
}
