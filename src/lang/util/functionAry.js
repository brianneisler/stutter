import arraySlice from './arraySlice'
import functionDefineLength from './functionDefineLength'

// NOTE BRN: Originally had a dynamic method produced here but jsperf seems to
// indicate that simply using an array slice is actually faster
// https://jsperf.com/direct-call-vs-slice
const aryFunction = (func, number) => {
  return function() {
    return func.apply(this, arraySlice(arguments, 0, number))
  }
}

/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `number` parameters. Any extraneous parameters will not be passed to
 * the supplied function.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to wrap.
 * @param {Number} number The desired arity of the new function.
 * @returns {Function} A new function wrapping `func`. The new function is
 * guaranteed to be of arity `number`.
 * @example
 *
 * const takesTwoArgs = (a, b) => [a, b]
 *
 * takesTwoArgs.length
 * //=> 2
 *
 * takesTwoArgs(1, 2)
 * //=> [1, 2]
 *
 * const takesOneArg = functionAry(1, takesTwoArgs)
 * takesOneArg.length
 * //=> 1
 *
 * // Only `n` arguments are passed to the wrapped function
 * takesOneArg(1, 2)
 * //=> [1, undefined]
 */
const functionAry = (func, number) => functionDefineLength(aryFunction(func, number), number)

export default functionAry
