import { anyIsDate } from './util'
import defn from './defn'

/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * isDate(new Date)
 * // => true
 *
 * isDate('Mon April 23 2012')
 * // => false
 */
const isDate = defn('isDate', anyIsDate)

export default isDate
