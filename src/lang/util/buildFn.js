import Fn from './js/Fn'

/**
 * Generate a new Fn that will check the Parameters and the return type if they exist.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to wrap.
 * @param {?Object} meta The meta properties to set on the new Fn.
 * @return {Function} The new type checked function.
 * @example
 *
 * const fn = buildFn((arg1, arg2) => arg1 + arg2, {
 *   parameters: [
 *     new Parameter('arg1', Number),
 *     new Parameter('arg1', Number)
 *   ],
 *   returns: Number
 * })
 *
 * fn(1, 2)
 * //=> 3
 *
 * fn('foo', 123)
 * //=> throws TypeError
 *
 * const fn = buildFn(() => 'foo', {
 *   parameters: [],
 *   returns: Number
 * })
 *
 * fn()
 * //=> throws TypeError
 */
const buildFn = (func, meta) => Fn.build(func, meta)

export default buildFn
