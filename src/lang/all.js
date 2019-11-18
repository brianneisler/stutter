import Any from './types/Any'
import anyResolveAll from './util/anyResolveAll'
import defn from './defn'

/**
 * Resolves all async values in an `Iterbale` data object.
 *
 * Auto curried for placeholder support.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The data object whose values should be resolved. If
 * value is not iterable, the value is simply resolved to itself.
 * @returns {*} A clone of the data object with its values resolved.
 * @example
 *
 * const nums = [
 *   1,
 *   Promise.resolve(2),
 *   (async () => 3)()
 * ]
 * await all(nums)
 * //=> [ 1, 2, 3 ]
 *
 * const keyed = {
 *   a: 1,
 *   b: Promise.resolve(2),
 *   c: (async () => 3)()
 * }
 * await all(keyed)
 * //=> { a: 1, b: 2, c: 3 }
 *
 * await all('abc')
 * //=> 'abc'
 *
 * await all(123)
 * //=> 123
 */
const all = defn(
  'all',
  'Resolves all resolvable values in a data object',

  [Any],
  (any) => anyResolveAll(any)
)

export default all
