import anyHasKey from './anyHasKey'
import anyIsArray from './anyIsArray'
import anyIsKey from './anyIsKey'
import anyIsProp from './anyIsProp'
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
 * @param {Object} object The object to check against for existing properties, keys or indexes that may be interpreted as a path
 * @returns {Array<string>} The path
 * @example
 *
 * anyToPath('a.b.c')
 * //=> ['a', 'b', 'c']
 *
 * anyToPath('a.b.c', {
 *   'a.b.c': 'foo'
 * })
 * //=> ['a.b.c']
 */
const anyToPath = (any, object) => {
  if (!anyIsString(any)) {
    if (anyIsArray(any) && !anyHasKey(object, any)) {
      return any
    }
    return [any]
  }

  // TODO BRN: Rework this part... should be using anyHasKey and anyHasProp
  // NOTE BRN: Keys take precendence over props
  if (anyIsKey(any, object) || anyIsProp(any, object)) {
    return [any]
  }
  return stringToPath(any)
}

export default anyToPath
