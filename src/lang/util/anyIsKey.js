import { REGEX_DEEP_PATH, REGEX_PLAIN_PROP } from '../constants'
import anyIsFunction from './anyIsFunction'
import anyIsString from './anyIsString'

/**
 * Checks if `any` is a key and not a path. The key does NOT need to exist in the optional Keyed value. The Keyed value is used to differentiate between a path and a key that is equivalent to a path.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @param {Keyed} keyed The keyed value to query keys on.
 * @returns {boolean} Returns `true` if `value` is a key
 * @example
 *
 * anyIsKey('foo')
 * //=> true
 *
 * anyIsKey('foo.bar')
 * //=> false
 *
 * anyIsKey('foo.bar', {
 *   'foo.bar': 'value'
 * })
 * //=> true
 *
 * anyIsKey(123)
 * //=> true
 *
 * anyIsKey(true)
 * //=> true
 *
 * anyIsKey(null)
 * //=> true
 *
 * anyIsKey(undefined)
 * //=> true
 *
 * anyIsKey(Symbol('abc'))
 * //=> true
 *
 * anyIsKey(Symbol.for('foo'))
 * //=> true
 *
 * anyIsKey([])
 * //=> false
 *
 * anyIsKey({})
 * //=> false
 */
const anyIsKey = (any, keyed) => {
  if (anyIsString(any)) {
    return (
      REGEX_PLAIN_PROP.test(any) ||
      !REGEX_DEEP_PATH.test(any) ||
      (keyed != null && anyIsFunction(keyed.has) && keyed.has(any))
    )
  }
  return true
}

export default anyIsKey
