import { Key } from './types'
import defn from './defn'
import is from './is'

/**
 * Checks if `any` is a key and not a path. The key does NOT need to exist in the optional Keyed value. The Keyed value is used to differentiate between a path and a key that is equivalent to a path.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @param {Keyed} [keyed] The keyed value to query keys on.
 * @returns {boolean} Returns `true` if `value` is a key
 * @example
 *
 * isKey('foo')
 * //=> true
 *
 * isKey('foo.bar')
 * //=> false
 *
 * isKey('foo.bar', {
 *   'foo.bar': 'value'
 * })
 * //=> true
 *
 * isKey(123)
 * //=> true
 *
 * isKey(true)
 * //=> true
 *
 * isKey(null)
 * //=> true
 *
 * isKey(undefined)
 * //=> true
 *
 * isKey(Symbol('abc'))
 * //=> true
 *
 * isKey(Symbol.for('foo'))
 * //=> true
 *
 * isKey([])
 * //=> false
 *
 * isKey({})
 * //=> false
 */
const isKey = defn('isKey', is(Key))

export default isKey
