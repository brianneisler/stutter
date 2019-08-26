import Integer from './types/Integer'
import defn from './defn'
import to from './to'

/**
 * Converts `any` to an Integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 */
const toInteger = defn('toInteger', to(Integer))

export default toInteger
