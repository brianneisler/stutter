import Any from './types/Any'
import Path from './types/Path'
import anyToPath from './util/anyToPath'
import defn from './defn'
import get from './get'

/**
 * @since v0.1.0
 * @param {string} value The value to cast to an array path
 * @param {Object} object The object to check against for existing properties, keys or indexes that may be interpreted as a path
 * @returns {Array<string>} The path
 * @example
 *
 * path('a.b.c')
 * //=> ['a', 'b', 'c']
 *
 * path('a.b.c', {
 *   a: {
 *     b: {
 *       c: 'foo'
 *     }
 *   }
 * })
 * //=> 'foo'
 */
const path = defn(
  'lang.path',
  'Casts any value to a Path.',

  // TOOD BRN: This will prevent curried usage of this method
  [Any, () => Path],
  (any) => anyToPath(any),

  [Any, Any, () => Any],
  (any, target) => get(anyToPath(any), target)
)

export default path
