import { REGEX_DEEP_PATH, REGEX_PLAIN_PROP } from '../constants'
import Object from './js/Object'
import anyIsObject from './anyIsObject'
import anyIsString from './anyIsString'
import anyIsSymbol from './anyIsSymbol'

/**
 * Checks if `any` is a property name and not a path.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @param {Object} [object] The object to query props on.
 * @returns {boolean} Returns `true` if `any` is a property name, else `false`.
 * @example
 *
 * anyIsProp('foo')
 * //=> true
 *
 * anyIsProp('foo.bar')
 * //=> false
 *
 * anyIsProp('foo.bar', {
 *   'foo.bar': 'any'
 * })
 * //=> true
 *
 * anyIsProp(Symbol('abc'))
 * //=> true
 *
 * anyIsProp(Symbol.for('foo'))
 * //=> true
 *
 * anyIsProp(new String('foo'))
 * //=> true
 *
 * anyIsProp(123)
 * //=> false
 *
 * anyIsProp(true)
 * //=> false
 *
 * anyIsProp(null)
 * //=> false
 *
 * anyIsProp(undefined)
 * //=> false
 *
 * anyIsProp([])
 * //=> false
 *
 * anyIsProp({})
 * //=> false
 */
const anyIsProp = (any, object) => {
  if (anyIsSymbol(any)) {
    return true
  }
  if (!anyIsString(any) || anyIsObject(any)) {
    return false
  }
  return (
    REGEX_PLAIN_PROP.test(any) ||
    !REGEX_DEEP_PATH.test(any) ||
    (object != null && any in Object(object))
  )
}

export default anyIsProp
