import { anyIsProp } from './util'
import defn from './defn'

/**
 * Checks if `any` is a property name and not a path.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @param {Object} [object] The object to query props on.
 * @returns {boolean} Returns `true` if `any` is a property name, else `false`.
 * @example
 *
 * isProp('foo')
 * //=> true
 *
 * isProp('foo.bar')
 * //=> false
 *
 * isProp('foo.bar', {
 *   'foo.bar': 'value'
 * })
 * //=> true
 *
 * isProp(Symbol('abc'))
 * //=> true
 *
 * isProp(Symbol.for('foo'))
 * //=> true
 *
 * isProp(new String('foo'))
 * //=> true
 *
 * isProp(123)
 * //=> false
 *
 * isProp(true)
 * //=> false
 *
 * isProp(null)
 * //=> false
 *
 * isProp(undefined)
 * //=> false
 *
 * isProp([])
 * //=> false
 *
 * isProp({})
 * //=> false
 */
const isProp = defn('isProp', anyIsProp)

export default isProp
