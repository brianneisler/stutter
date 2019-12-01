import Fn from './types/Fn'
import Function from './types/Function'
import defn from './defn'
import fnCurry from './util/fnCurry'
import functionCurry from './util/functionCurry'

/**
 * Returns a curried equivalent of the provided function. The curried function has two unusual capabilities. First, its arguments needn't be provided one at a time. If `f` is a ternary function and `g` is `curry(f)`, the following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`__`](#__) may be used to specify "gaps", allowing partial application of any combination of arguments, regardless of their positions. If `g` is as above and `_` is [`__`](#__), the following are equivalent:
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
 * @param {Function} func The function to curry.
 * @return {Function} A new, curried function.
 * @example
 *
 * const addFourNumbers = (a, b, c, d) => a + b + c + d
 *
 * const curriedAddFourNumbers = curry(addFourNumbers)
 * const f = curriedAddFourNumbers(1, 2)
 * const g = f(3)
 * g(4)
 * //=> 10
 */
const curry = defn(
  'lang.curry',
  'Returns a curried equivalent of the provided function.',

  [Function, () => Function],
  (func) => functionCurry(func),

  [Fn, () => Fn],
  (fn) => fnCurry(fn)
)

export default curry
