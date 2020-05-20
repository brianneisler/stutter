import { FN } from '../constants/Symbol'

/**
 * Calls the function of a given `Fn`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Fn} fn The `Fn` to call.
 * @param {Context} context The stutter `Context` to execute the `Fn` with
 * @param {...Any} args The `Arguments` to execute the `Fn` with
 * @returns {Any} The returned value from the execution of `fn`
 * @example
 *
 * const arrayWrap = definitionToFn((foo) => [ foo ])
 *
 * callFn(arrayWrap, 'bar')
 * // => [ 'bar' ]
 */
const fnCall = (fn, context, ...args) => {
  if (fn[FN]) {
    fn = fn[FN]
  }
  return fn.call(context, ...args)
}

export default fnCall
