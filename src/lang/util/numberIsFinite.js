import Number from './js/Number'

/**
 * Determines whether the passed value is a finite number. If  needed, the parameter is first converted to a number.
 *
 * See [Number.isFinite](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite) for more information
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} testValue The value to be tested for finiteness.
 * @returns {object} Returns `false` if the argument is positive or negative `Infinity` or `NaN`. Otherwise, returns `true`.
 * @example
 *
 * numberIsFinite(123)
 * //=> true
 *
 * numberIsFinite('123')
 * //=> true
 *
 * numberIsFinite(Infinity)
 * //=> false
 *
 * numberIsFinite(NaN)
 * //=> false
 */
const numberIsFinite = Number.isFinite

export default numberIsFinite
