import Finite from './types/Finite'
import defn from './defn'
import to from './to'

/**
 * Converts `any` to a Finite number.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * toFinite(3.2)
 * // => 3.2
 *
 * toFinite(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toFinite(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toFinite('3.2')
 * // => 3.2
 */
const toFinite = defn('toFinite', to(Finite))

export default toFinite
