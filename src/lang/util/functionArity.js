import Any from '../types/Any'
import Array from './js/Array'
import arrayConcat from './arrayConcat'
import arrayLikeSlice from './arrayLikeSlice'
import functionCopyMeta from './functionCopyMeta'
import functionDefineParameters from './functionDefineParameters'
import functionTypify from './functionTypify'

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
 * @param {Function} func The function to modify.
 * @param {Number} number The desired arity of the function.
 * @returns {Function} The given `func` with parameter length adjusted to `number`.
 * @example
 *
 * const takesNArgs = (...args) => [ ...args ]
 *
 * takesNArgs.length
 * //=> 0
 *
 * takesNArgs(1, 2)
 * //=> [1, 2]
 *
 * const takesTwoArgs = functionArity(takesNArgs, 2)
 * takesTwoArgs.length
 * //=> 2
 *
 * // All arguments are passed to the wrapped function
 * takesTwoArgs(1, 2, 3)
 * //=> [1, 2, 3]
 */
const functionArity = (func, number) => {
  func = functionTypify(func)
  const { length } = func.parameters
  const parameters =
    length >= number
      ? arrayLikeSlice(func.parameters, 0, number)
      : arrayConcat(func.parameters, repeatDefaultParams(number - length, length))

  return functionDefineParameters(
    functionCopyMeta(function() {
      return func.apply(this, arguments)
    }, func),
    parameters
  )
}

export default functionArity
