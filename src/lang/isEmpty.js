import { Any } from './types'
import defn from './defn'
import isArguments from './isArguments'
import isArray from './isArray'
import isArrayLike from './isArrayLike'
import isBuffer from './isBuffer'
import isPrototype from './isPrototype'
import isTypedArray from './isTypedArray'
import objectHasOwnProperty from './util/objectHasOwnProperty'
import objectKeys from './util/objectKeys'
import toStringTag from './toStringTag'

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 *
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * Auto curried for placeholder support.
 *
 * @function
 * @since v0.1.0
 * @category logic
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty(null) // => true
 *
 * isEmpty(true) // => true
 *
 * isEmpty(1) // => true
 *
 * isEmpty([1, 2, 3]) // => false
 *
 * isEmpty('abc') // => false
 *
 * isEmpty({ 'a': 1 })  // => false
 */
const isEmpty = defn(
  'isEmpty',
  'Checks if `value` is an empty object, collection, map, or set.',

  [Any],
  (value) => {
    if (value == null) {
      return true
    }
    if (
      isArrayLike(value) &&
      (isArray(value) ||
        typeof value == 'string' ||
        typeof value.splice == 'function' ||
        isBuffer(value) ||
        isTypedArray(value) ||
        isArguments(value))
    ) {
      return !value.length
    }
    // TODO BRN: It might make sense to move the Set and Map implementations to a
    // protocol for "Emptiable" objects
    const tag = toStringTag(value)
    if (tag == 'Map' || tag == 'Set') {
      return !value.size
    }
    if (isPrototype(value)) {
      return !objectKeys(value).length
    }
    for (const key in value) {
      if (objectHasOwnProperty(value, key)) {
        return false
      }
    }
    return true
  }
)

export default isEmpty
