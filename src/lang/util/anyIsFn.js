import Fn from './js/Fn'
import SYMBOL_FN from '../constants/SYMBOL_FN'
import anyIsObject from './anyIsObject'

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
 * anyIsFn(buildFn(() => {}))
 * // => true
 *
 * anyIsFn(() => {})
 * // => false
 */
const anyIsFn = (any) => {
  if (!anyIsObject(any)) {
    return false
  }
  if (any[SYMBOL_FN]) {
    return any[SYMBOL_FN] instanceof Fn
  }
  return any instanceof Fn
}

export default anyIsFn
