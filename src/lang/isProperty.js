import Any from './types/Any'
import Boolean from './types/Boolean'
import Property from './types/Property'
import defn from './defn'
import is from './is'

/**
 * @since v0.1.0
 * @param {Any} any The value to check.
 * @returns {Boolean} Returns `true` if `any` is a property name, else `false`.
 * @example
 *
 * isProperty('foo')
 * //=> true
 *
 * isProperty('foo.bar')
 * //=> true
 *
 * isProperty(Symbol('abc'))
 * //=> true
 *
 * isProperty(Symbol.for('foo'))
 * //=> true
 *
 * isProperty(new String('foo'))
 * //=> true
 *
 * isProperty(123)
 * //=> false
 *
 * isProperty(true)
 * //=> false
 *
 * isProperty(null)
 * //=> false
 *
 * isProperty(undefined)
 * //=> false
 *
 * isProperty([])
 * //=> false
 *
 * isProperty({})
 * //=> false
 */
const isProperty = defn(
  'lang.isProperty',
  'Checks if `Any` is classified as a `Property` type.',

  [Any, () => Boolean],
  is(Property)
)
export default isProperty
