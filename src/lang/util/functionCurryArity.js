import functionArity from './fnArity'
import functionCurry from './fnCurry'

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
 * const addNumbers = (...numbers) => arrayReduce(
 *   (accum, number) => accum + number,
 *   0,
 *   numbers
 * )
 *
 * const addFourNumbers = functionCurryArity(addNumbers, 4)
 * const f = curriedAddFourNumbers(1, 2)
 * const g = f(3)
 * g(4)
 * //=> 10
 */
const functionCurryArity = (func, number) => functionCurry(functionArity(func, number))

export default functionCurryArity
