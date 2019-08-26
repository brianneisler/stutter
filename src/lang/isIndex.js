import { anyIsIndex } from './util'
import defn from './defn'

/**
 * Checks if `any` is a valid array-like index.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {*} any The value to check.
 * @param {number} length [=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 * @example
 *
 * isIndex(0)
 * //=> true
 *
 * isIndex(1)
 * //=> true
 *
 * isIndex(-1)
 * //=> false
 */
const isIndex = defn('isIndex', anyIsIndex)

export default isIndex
