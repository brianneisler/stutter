import { IDENTITY } from '../constants/Function'
import arrayFlatten from './arrayFlatten'
import arrayLikeReduce from './arrayLikeReduce'
import arrayLikeSlice from './arrayLikeSlice'

/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * @function
 * @since v0.2.0
 * @category lang.util
 * @param {...Function} functions
 * @returns {Function}
 * @example
 *
 * const f = functionsPipe(Math.pow, negate, inc)
 *
 * f(3, 4) // -(3^4) + 1
 */
const functionsPipe = (...functions) => {
  functions = arrayFlatten(functions)
  const { length } = functions
  if (length === 0) {
    return IDENTITY
  }

  if (length === 1) {
    return functions[0]
  }

  const firstFunc = functions[0]
  const rest = arrayLikeSlice(functions, 1)

  return (...args) =>
    arrayLikeReduce(rest, firstFunc(...args), (piped, func) => func(piped))
}

export default functionsPipe
