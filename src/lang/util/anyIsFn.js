import { FN } from '../constants/Symbol'
import anyIsObject from './anyIsObject'
import anyToStringTag from './anyToStringTag'

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
  if (any[FN]) {
    return anyToStringTag(any[FN]) === 'Fn'
  }
  return anyToStringTag(any) === 'Fn'
}

export default anyIsFn
