import defn from './defn'

/**
 * Converts `value` to a string. An empty string is returned for `null`  and `undefined` values. The sign of `-0` is preserved.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *

 */
const toString = defn('lang.toString')

export default toString
