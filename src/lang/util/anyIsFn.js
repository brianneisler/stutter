import Fn from './js/Fn'
import anyIsObjectLike from './anyIsObjectLike'

/**
 * Checks if `any` is an `Fn`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is an `Fn` object, else `false`.
 * @example
 *
 * anyIsFn(new Fn(() => {}))
 * // => true
 *
 * anyIsFn(() => {})
 * // => false
 */
const anyIsFn = (any) => {
  if (!anyIsObjectLike(any)) {
    return false
  }
  return any instanceof Fn
}

export default anyIsFn
