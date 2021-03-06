import Any from '../types/Any'
import Array from '../classes/Array'
import Parameter from '../classes/Parameter'
import arrayConcat from './arrayConcat'
import arrayLikeSlice from './arrayLikeSlice'
import fnGetMeta from './fnGetMeta'

const repeatDefaultParams = (number, startAt) => {
  let idx = 0
  const list = new Array(number)
  while (idx < number) {
    list[idx] = new Parameter(`arg${idx + startAt}`, Any)
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
 * const takesNArgs = buildFn((...args) => [ ...args ])
 *
 * takesNArgs.length
 * //=> 0
 *
 * takesNArgs(1, 2)
 * //=> [1, 2]
 *
 * const takesTwoArgs = fnArity(takesNArgs, 2)
 * takesTwoArgs.length
 * //=> 2
 *
 * // All arguments are passed to the wrapped function
 * takesTwoArgs(1, 2, 3)
 * //=> [1, 2, 3]
 */
const fnArity = (fn, number) => {
  let { parameters } = fnGetMeta(fn)
  const { length } = parameters
  parameters =
    length >= number
      ? arrayLikeSlice(parameters, 0, number)
      : arrayConcat(parameters, repeatDefaultParams(number - length, length))

  return fn.update({ parameters })
}

export default fnArity
