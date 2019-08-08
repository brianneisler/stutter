/**
 * Calls the function of a given `Fn`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Fn} fn The `Fn` to call.
 * @param {...Any} args The Arguments to execute the `Fn` with
 * @returns {Any} The returned value from the execution of `fn`
 * @example
 *
 * const arrayWrap = new Fn((foo) => [ foo ])
 *
 * callFn(arrayWrap, 'bar')
 * // => [ 'bar' ]
 */
const fnCall = (fn, ...args) => fn.func.apply(null, args)

export default fnCall
