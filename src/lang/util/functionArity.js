import functionDefineLength from './functionDefineLength'

/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `number` parameters.
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
 * const takesOneArg = functionArity(1, takesTwoArgs)
 * takesOneArg.length
 * //=> 1
 *
 * // All arguments are passed to the wrapped function
 * takesOneArg(1, 2)
 * //=> [1, 2]
 */
const functionArity = (func, number) => functionDefineLength(func, number)

export default functionArity
