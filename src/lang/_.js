import { FUNCTIONAL_PLACEHOLDER } from './constants'

/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @type Object
 * @since v0.1.0
 * @category lang
 * @example
 *
 * const greet = replace('{name}', __, 'Hello, {name}!')
 * greet('Alice')
 * //=> 'Hello, Alice!'
 */
const _ = FUNCTIONAL_PLACEHOLDER

export default _
