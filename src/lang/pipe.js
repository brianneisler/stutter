import { functionsPipe } from './util'

// TODO BRN: This method is important at a fundamental level. Need to rewrite this to not depend upon data methods.
/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @function
 * @since v0.1.0
 * @category common
 * @param {...Function} functions
 * @returns {Function}
 * @example
 *
 * const f = pipe(Math.pow, negate, inc)
 *
 * f(3, 4) // -(3^4) + 1
 */
const pipe = (...functions) => functionsPipe(...functions)

export default pipe
