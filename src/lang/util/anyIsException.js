import anyIsObjectLike from './anyIsObjectLike'
import anyToStringTag from './anyToStringTag'

/**
 * Checks if `any` is an `Exception`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is an `Exception` object, else `false`.
 * @example
 *
 * anyIsException(new Exception())
 * // => true
 *
 * anyIsExeption(new Error())
 * // => false
 */
const anyIsException = (any) => {
  if (!anyIsObjectLike(any)) {
    return false
  }
  return anyToStringTag(any) == 'Exception'
}

export default anyIsException
