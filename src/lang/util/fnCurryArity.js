import fnArity from './fnArity'
import fnGetMeta from './fnGetMeta'

/**
 * Returns a curried equivalent of the provided function but limited to an arity
 * of `number`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to curry.
 * @param {Number} number The arity of the curried function.
 * @return {Function} A new, curried function.
 * @example
 *
 * const addNumbers = buildFn((...numbers) => arrayReduce(
 *   (accum, number) => accum + number,
 *   0,
 *   numbers
 * ))
 *
 * const addFourNumbers = fnCurryArity(addNumbers, 4)
 * const f = curriedAddFourNumbers(1, 2)
 * const g = f(3)
 * g(4)
 * //=> 10
 */
const fnCurryArity = (fn, number) => {
  fn = fnArity(fn, number)
  if (!fnGetMeta(fn).curry) {
    return fn.update({ curry: true })
  }
  return fn
}

export default fnCurryArity
