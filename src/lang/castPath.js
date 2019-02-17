import { baseHasKey } from './hasKey'
import curryN from './curryN'
import isArray from '../lang/isArray'
import isKey from '../lang/isKey'
import isProp from '../lang/isProp'
import isString from '../lang/isString'
import stringToPath from './stringToPath'

const baseCastPath = (value, object) => {
  if (!isString(value)) {
    if (isArray(value) && !hasKey(value, object)) {
      return value
    }
    return [value]
  }

  // NOTE BRN: Keys take precendence over props
  if (isKey(value, object) || isProp(value, object)) {
    return [value]
  }
  return stringToPath(value)
}

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
 * castPath('a.b.c')
 * //=> ['a', 'b', 'c']
 *
 * castPath('a.b.c', {
 *   'a.b.c': 'foo'
 * })
 * //=> ['a.b.c']
 */
const castPath = curryN(1, baseCastPath)

export default castPath

export { baseCastPath }
