import { anyIsGenerator } from './util'
import defn from './defn'

/**
 * Checks whether the given value is a generator.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param  {*} any The value to check.
 * @returns {boolean} Returns `true` if `value` is a generator, else `false`.
 * @example
 *
 * isGenerator((function*() {})())
 * //=> true
 *
 * isGenerator((function() {})())
 * //=> false
 *
 * isGenerator({
 *   next: () => {},
 *   throw: () => {}
 * })
 * //=> true
 */
const isGenerator = defn('isGenerator', anyIsGenerator)

export default isGenerator
