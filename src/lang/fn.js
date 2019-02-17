import { definitionsToFn } from './util'
import Any from './types/Any'
import Array from './types/Array'
import Function from './types/Function'
import def from './def'

/**
 * Defines an `Fn` function.
 *
 * An `Fn` function is a function with a few predefined behaviours. These
 * functions will...
 * - [curry](#curry)
 * - [validate args](validate)
 * - [resolve all args](#allWith)
 *
 * @function
 * @since v0.1.0
 * @category lang
 *
 * @signatute fn(func:Function) => Function
 * @param {Function} func
 * @returns {Function} The wrapped function
 * @example
 *
 * const split = fn((string) => string.split('.'))
 *
 * split('foo.bar')
 * //=> ['foo', 'bar']
 *
 * split(123)
 * //=> throws TypeError '.split is not a function'
 *
 *
 * @signatute fn(func:Function, typeDefinitions:[...Type, () => Type]) => Function
 * @param {Function} func
 * @param {[...Type, () => Type]} typeDefinitions
 * @returns {Function} The wrapped function
 * @example
 *
 * const split = fn(
 *   [String, () => Array],
 *   (string) => string.split('.'))
 * )
 *
 * split('foo.bar')
 * //=> ['foo', 'bar']
 *
 * split(123)
 * //=> throws Exception 'Function `split` expected Parameter `string` to be a `String`. Instead found a `Number`'
 *
 *
 * @signature fn(...definitions:(Function|[...Type, () => Type])) => Function
 * @param {...(Function|Array)} definitions One or more function definitions
 * @returns {Function} The wrapped function
 * @example
 *
 * const split = fn(
 *   [String],
 *   (string) => string.split('.'),
 *
 *   [Any],
 *   (any) => toString(any).split('.')
 * )
 *
 * split('foo.bar')
 * //=> ['foo', 'bar']
 *
 * split(123)
 * //=> ['123']
 */
const fn = def(
  'lang.fn',
  definitionsToFn([
    [Function, () => Function],
    (func) => definitionsToFn([func]),

    [Array, Function, () => Function],
    (parameterTypes, func) => definitionsToFn([parameterTypes, func]),

    [Any, () => Function], // TODO BRN: Add support for unions
    (...definitions) => definitionsToFn(definitions)
  ])
)

export default fn
