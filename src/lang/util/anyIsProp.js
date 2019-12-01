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
 * @returns {boolean} Returns `true` if `any` is a property name, else `false`.
 * @example
 *
 * anyIsProp('foo')
 * //=> true
 *
 * anyIsProp('foo.bar')
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
const anyIsProp = (any) => anyIsSymbol(any) || anyIsString(any)

export default anyIsProp
