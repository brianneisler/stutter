import Fn from './types/Fn'
import Function from './types/Function'
import Number from './types/Number'
import definitionToFn from './util/definitionToFn'
import defn from './defn'
import fnCurryArity from './util/fnCurryArity'

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
 *
 * @signature curryN:(length: Number, fn: Fn(...Any) => Any) => Fn(length...Any) => Any
 * @param {Number} length The arity for the returned function.
 * @param {Fn} fn The Fn to curry.
 * @return {Function} A new, curried function.
 * @example
 *
 * const sumArgs = fn((...args) => sum(args))
 *
 * const curriedAddFourNumbers = curryN(4, sumArgs)
 * const f = curriedAddFourNumbers(1, 2)
 * const g = f(3)
 * g(4)
 * //=> 10
 *
 * @signature curryN:(fn: Fn(...Any) => Any, length: Number) => Fn(length...Any) => Any
 * @param {Number} length The arity for the returned function.
 * @param {Fn} fn The Fn to curry.
 * @return {Function} A new, curried function.
 * @example
 *
 * const sumArgs = fn((...args) => sum(args))
 *
 * const curriedAddFourNumbers = curryN(4, sumArgs)
 * const f = curriedAddFourNumbers(1, 2)
 * const g = f(3)
 * g(4)
 * //=> 10
 */
const curryN = defn(
  'lang.curryN',

  [Number, Fn],
  (n, fn) => fnCurryArity(fn, n),
  [Fn, Number],
  (fn, n) => fnCurryArity(fn, n),

  [Number, Function],
  (n, func) => fnCurryArity(definitionToFn(func), n),
  [Function, Number],
  (func, n) => fnCurryArity(definitionToFn(func), n)
)

export default curryN
