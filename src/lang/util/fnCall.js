import SYMBOL_FN from '../constants/SYMBOL_FN'

/**
 * Calls the function of a given `Fn`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Fn} fn The `Fn` to call.
 * @param {Object} context The `Context` to execute the `Fn` with
 * @param {...Any} args The `Arguments` to execute the `Fn` with
 * @returns {Any} The returned value from the execution of `fn`
 * @example
 *
 * const arrayWrap = definitionToFn((foo) => [ foo ])
 *
 * callFn(arrayWrap, 'bar')
 * // => [ 'bar' ]
 */
const fnCall = (fn, context = null, ...args) => {
  return fn.call(context, ...args)
}

export default fnCall
