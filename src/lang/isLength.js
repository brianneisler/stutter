import { anyIsLength } from './util'
import defn from './defn'

/**
 * Checks if `any` is an integer that can be a length for an array like value
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `value` can be a length.
 * @example
 *
 * isLength(123)
 * //=> true
 *
 * isLength(0)
 * //=> true
 *
 * isLength(MAX_SAFE_INTEGER)
 * //=> true
 *
 * isLength(-1)
 * // => false
 *
 * isLength(1.23)
 * // => false
 *
 * isLength(MAX_SAFE_INTEGER + 1)
 * //=> false
 */
const isLength = defn('isLength', anyIsLength)

export default isLength
