import SYMBOL_FN from '../constants/SYMBOL_FN'

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
const fnApply = (fn, context = null, args = []) => {
  if (fn[SYMBOL_FN]) {
    fn = fn[SYMBOL_FN]
  }
  return fn.apply(context, args)
}

export default fnApply
