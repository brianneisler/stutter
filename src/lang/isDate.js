import Any from './types/Any'
import Boolean from './types/Boolean'
import Date from './types/Date'
import defn from './defn'
import is from './is'

/**
 * @since v0.1.0
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
const isDate = defn(
  'lang.isDate',
  'Checks if `Any` is classified as a `Date` type.',

  [Any, () => Boolean],
  is(Date)
)

export default isDate
