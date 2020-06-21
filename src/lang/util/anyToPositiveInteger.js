import Math from '../classes/Math'
import anyToInteger from './anyToInteger'

/**
 * Converts `any` to a positive Integer.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * anyToPositiveInteger(3.2)
 * // => 3
 *
 * anyToPositiveInteger(-4)
 * // => 4
 *
 * anyToPositiveInteger(Number.MIN_VALUE)
 * // => 0
 *
 * anyToPositiveInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * anyToPositiveInteger('3.2')
 * // => 3
 */
const anyToPositiveInteger = (any) => Math.abs(anyToInteger(any))

export default anyToPositiveInteger
