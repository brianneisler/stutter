import { Function, Number } from './types'
import { functionCurryArity } from './util'
import defn from './defn'

/**
 * Returns a curried equivalent of the provided function, with the specified arity. The curried function has two unusual capabilities. First, its arguments needn't be provided one at a time. If `g` is `curryN(3, f)`, the following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`_`](#_) may be used to specify "gaps", allowing partial application of any combination of arguments, regardless of their positions. If `g` is as above and `_` is [`__`](#__), the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @example
 *
 * const sumArgs = (...args) => sum(args)
 *
 * const curriedAddFourNumbers = curryN(4, sumArgs)
 * const f = curriedAddFourNumbers(1, 2)
 * const g = f(3)
 * g(4)
 * //=> 10
 */
const curryN = defn(
  'curryN',
  [Number, Function],
  (n, fn) => functionCurryArity(fn, n),
  [Function, Number],
  (fn, n) => functionCurryArity(fn, n)
)

export default curryN
