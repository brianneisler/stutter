import { Any } from './types'
import { anyResolveAll } from './util'
import defn from './defn'

/**
 * Resolves all async values in an `Array` or `Object`
 *
 * Auto curried for placeholder support.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The `Array` or `Object` whose values should be resolved. If
 * value is not an `Object` or `Array`, the value is simply resolved to itself.
 * @returns {*} The `Array` or `Object` with its values resolved.
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
const all = defn('all', 'Resolves all async values in an `Array` or `Object`', [Any], (any) =>
  anyResolveAll(any)
)

export default all
