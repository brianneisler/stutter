import Any from './types/Any'
import Path from './types/Path'
import anyToPath from './util/anyToPath'
import defn from './defn'

/**
 * Casts a value to an array path.
 *
 * @function
 * @since v0.1.0
 * @category common
 * @param {string} value The value to cast to an array path
 * @param {Object} object The object to check against for existing properties, keys or indexes that may be interpreted as a path
 * @returns {Array<string>} The path
 * @example
 *
 * path('a.b.c')
 * //=> ['a', 'b', 'c']
 *
 * path('a.b.c', {
 *   'a.b.c': 'foo'
 * })
 * //=> ['a.b.c']
 */
const path = defn(
  'path',
  'Casts a value to an array path.',

  [Any, () => Path],
  anyToPath
)

export default path
