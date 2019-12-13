import Any from './types/Any'
import Boolean from './types/Boolean'
import Generator from './types/Generator'
import defn from './defn'
import is from './is'

/**
 * @since v0.1.0
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
const isGenerator = defn(
  'lang.isGenerator',
  'Checks whether the given value is classified as a Generator',

  [Any, () => Boolean],
  is(Generator)
)

export default isGenerator
