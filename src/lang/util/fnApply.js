import { FN } from '../constants/Symbol'

/**
 * Applies the function of a given `Fn`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Fn} fn The `Fn` to apply.
 * @param {...Any} args The Arguments to execute the `Fn` with
 * @returns {Any} The returned value from the execution of `fn`
 * @example
 *
 * const arrayWrap = buildFn((foo, bar) => foo + bar)
 *
 * applyFn(arrayWrap, null, [ 'bim', 'bop' ])
 * // => 'bimbop'
 */
const fnApply = (fn, context, self = null, args = []) => {
  if (fn[FN]) {
    fn = fn[FN]
  }
  return fn.apply(context, self, args)
}

export default fnApply
