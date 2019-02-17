import { anyIsInteger } from './util'
import defn from './defn'

/**
 * Determine if the passed argument is an integer.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * isInteger(3) // => true
 *
 * isInteger(new Number(3)) // => true
 *
 * isInteger(3.2) // => false

 * isInteger(Number.MIN_VALUE) // => false
 *
 * isInteger(Infinity) // => false
 *
 * isInteger(NaN) // => false
 *
 * isInteger('3') // => false
 */
const isInteger = defn('isInteger', anyIsInteger)

export default isInteger
