import Any from '../types/Any'
import Array from './js/Array'
import arrayConcat from './arrayConcat'
import arrayLikeSlice from './arrayLikeSlice'
import fnSetParameters from './fnSetParameters'

const repeatDefaultParams = (number, startAt) => {
  let idx = 0
  const list = new Array(number)
  while (idx < number) {
    list[idx] = {
      name: `arg${idx + startAt}`,
      type: Any
    }
    idx += 1
  }
  return list
}

/**
 * Modifies a function to the give arity so that it accepts exactly `number`
 * parameters. Any extraneous parameters are spread and then reapplied on
 * execution. This is useful when you want to ensure a function's paramter
 * `length` is exactly `number` but still passes all arguments through.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Fn} fn The `Fn` to modify.
 * @param {Number} number The desired arity of the `Fn`.
 * @returns {Fn} The given `fn` with parameter length adjusted to `number`.
 * @example
 *
 * const takesNArgs = new Fn((...args) => [ ...args ])
 *
 * takesNArgs.parameters.length
 * //=> 0
 *
 * takesNArgs(1, 2)
 * //=> [1, 2]
 *
 * const takesTwoArgs = fnArity(takesNArgs, 2)
 * takesTwoArgs.parameters.length
 * //=> 2
 *
 * // All arguments are passed to the wrapped function
 * takesTwoArgs(1, 2, 3)
 * //=> [1, 2, 3]
 */
const fnArity = (fn, number) => {
  const { length } = fn.parameters
  const parameters =
    length >= number
      ? arrayLikeSlice(fn.parameters, 0, number)
      : arrayConcat(fn.parameters, repeatDefaultParams(number - length, length))

  return fnSetParameters(fn, parameters)
}

export default fnArity
