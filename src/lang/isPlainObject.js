import { anyIsPlainObject } from './util'
import defn from './defn'

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1
 * }
 *
 * isPlainObject(new Foo)
 * //=> false
 *
 * isPlainObject([1, 2, 3])
 * //=> false
 *
 * isPlainObject({ 'x': 0, 'y': 0 })
 * //=> true
 *
 * isPlainObject(Object.create(null))
 * //=> true
 */
const isPlainObject = defn('isPlainObject', anyIsPlainObject)

export default isPlainObject
