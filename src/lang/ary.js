import Fn from './types/Fn'
import Function from './types/Function'
import Number from './types/Number'
import definitionToFn from './util/definitionToFn'
import defn from './defn'
import fnAry from './util/fnAry'

/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `number` parameters. Any extraneous parameters will not be passed to
 * the supplied function.
 *
 * @function
 * @since v0.1.0
 * @category common
 * @param {Number} number The desired arity of the new function.
 * @param {Function} func The function to wrap.
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
 * const takesOneArg = nAry(1, takesTwoArgs)
 * takesOneArg.length
 * //=> 1
 *
 * // Only `n` arguments are passed to the wrapped function
 * takesOneArg(1, 2)
 * //=> [1, undefined]
 */
const ary = defn(
  'lang.ary',
  'Wraps a function of any arity (including nullary) in a function that accepts exactly `number` parameters. Any extraneous parameters will not be passed to the supplied function.',

  [Fn, Number, () => Fn],
  (fn, number) => fnAry(fn, number),
  [Number, Fn, () => Fn],
  (number, fn) => fnAry(fn, number),

  [Function, Number, () => Fn],
  (func, number) => fnAry(definitionToFn(func), number),
  [Number, Function, () => Fn],
  (number, func) => fnAry(definitionToFn(func), number)
)

export default ary
