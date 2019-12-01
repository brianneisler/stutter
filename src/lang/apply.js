import Any from './types/Any'
import Array from './types/Array'
import Function from './types/Function'
import defn from './defn'

/**
 * Applies function `func` to the argument list `args`.
 *
 * @function
 * @since v0.1.0
 * @category lang
 *
 * @signature apply<R>(func: (...Any) => R, args: Array) => R
 * @param {Function} func The function which will be called with `args`
 * @param {Array} args The arguments to call `func` with
 * @returns {Any} The result, equivalent to `func(...args)`
 * @example
 *
 * const nums = [1, 2, 3, -99, 42, 6, 7]
 * apply(Math.max, nums)
 * //=> 42
 *
 *
 * @signature apply<R>(args: Array, func: (...Any) => R) => R
 * @param {Array} args The arguments to call `func` with
 * @param {Function} func The function which will be called with `args`
 * @returns {Any} The result, equivalent to `func(...args)`
 * @example
 *
 * const nums = [1, 2, 3, -99, 42, 6, 7]
 * apply(nums, Math.min)
 * //=> -99
 */
const apply = defn(
  'lang.apply',
  'Applies function `func` to the argument list `args`.',

  [Function, Array, () => Any],
  function(func, args) {
    return func.apply(this, args)
  },

  [Array, Function, () => Any],
  function(args, func) {
    return func.apply(this, args)
  }
)

export default apply
