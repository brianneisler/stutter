import { anyIsRegExp } from './util'
import defn from './defn'

/**
 * Checks if `any` is classified as a `RegExp` object.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a regexp, else `false`.
 * @example
 *
 * isRegExp(/abc/)
 * // => true
 *
 * isRegExp('/abc/')
 * // => false
 */
const isRegExp = defn('isRegExp', anyIsRegExp)

export default isRegExp
