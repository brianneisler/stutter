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
 * const arrayWrap = new Fn((foo, bar) => foo + bar)
 *
 * applyFn(arrayWrap, [ 'bim', 'bop' ])
 * // => 'bimbop'
 */
const fnApply = (fn, args) => fn.func.apply(null, args)

export default fnApply
