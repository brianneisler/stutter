/**
 * Calls the function of a given `Fn`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Fn} fn The `Fn` to call.
 * @param {Context} context The stutter `Context` to execute the `Fn` with
 * @param {Object} self The javascript `Object` context to execute the `Fn` within
 * @param {...Any} args The `Arguments` to execute the `Fn` with
 * @returns {Any} The returned value from the execution of `fn`
 * @example
 *
 * const arrayWrap = definitionToFn((foo) => [ foo ])
 *
 * callFn(arrayWrap, 'bar')
 * // => [ 'bar' ]
 */
const fnCall = (fn, context, self = null, ...args) => {
  return fn.call(context, self, ...args)
}

export default fnCall
