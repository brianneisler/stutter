import fnArity from './fnArity'
import fnCurry from './fnCurry'

/**
 * Returns a curried equivalent of the provided `Fn` but limited to an arity
 * of `number`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Fn} fn The Fn to curry.
 * @param {Number} number The arity of the curried function.
 * @return {Fn} A new, curried Fn.
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
const fnCurryArity = (fn, number) => fnArity(fnCurry(fn), number)

export default fnCurryArity
