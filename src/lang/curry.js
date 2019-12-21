import Fn from './types/Fn'
import Function from './types/Function'
import definitionToFn from './util/definitionToFn'
import defn from './defn'
import fnCurry from './util/fnCurry'
import fnCurryArity from './util/fnCurryArity'
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
 * @since v0.1.0
 *
 * @signature curry:(length: Number, fn: Fn(...Any) => Any) => Fn(length...Any) => Any
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
 *
 * @signature curry:(length: Number, fn: Fn(...Any) => Any) => Fn(length...Any) => Any
 * @param {Number} length The arity for the returned function.
 * @param {Fn} fn The Fn to curry.
 * @return {Function} A new, curried function.
 * @example
 *
 * const sumArgs = fn((...args) => sum(args))
 *
 * const curriedAddFourNumbers = curry(4, sumArgs)
 * const f = curriedAddFourNumbers(1, 2)
 * const g = f(3)
 * g(4)
 * //=> 10
 *
 * @signature curry:(fn: Fn(...Any) => Any, length: Number) => Fn(length...Any) => Any
 * @param {Number} length The arity for the returned function.
 * @param {Fn} fn The Fn to curry.
 * @return {Function} A new, curried function.
 * @example
 *
 * const sumArgs = fn((...args) => sum(args))
 *
 * const curriedAddFourNumbers = curry(4, sumArgs)
 * const f = curriedAddFourNumbers(1, 2)
 * const g = f(3)
 * g(4)
 * //=> 10
 */
const curry = defn(
  'lang.curry',
  'Returns a curried equivalent of the provided function.',

  [Fn, () => Fn],
  (fn) => fnCurry(fn),

  [Number, Fn],
  (n, fn) => fnCurryArity(fn, n),

  [Fn, Number],
  (fn, n) => fnCurryArity(fn, n),

  [Function, () => Function],
  (func) => functionCurry(func),

  [Number, Function],
  (n, func) => fnCurryArity(definitionToFn(func), n),

  [Function, Number],
  (func, n) => fnCurryArity(definitionToFn(func), n)
)

export default curry
