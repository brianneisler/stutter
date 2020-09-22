import Path from '../classes/Path'

import anyIsArray from './anyIsArray'
import anyIsImmutableList from './anyIsImmutableList'
import anyIsString from './anyIsString'
import stringToPath from './stringToPath'

/**
 * Casts a value to an array path.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category common
 * @param {string} value The value to cast to an array path
 * @returns {Array<string>} The path
 * @example
 *
 * anyToPath('a.b.c')
 * //=> ['a', 'b', 'c']
 *
 */
const anyToPath = (any) => {
  if (!anyIsString(any)) {
    if (anyIsArray(any) || anyIsImmutableList(any)) {
      return new Path(any)
    }
    return new Path([any])
  }

  return stringToPath(any)
}

export default anyToPath
