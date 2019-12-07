import Any from './types/Any'
import Arguments from './types/Arguments'
import Boolean from './types/Boolean'
import defn from './defn'
import is from './is'

/**
 * Checks if `any` is likely an `Arguments` object.
 *
 * @function
 * @category lang
 * @since v0.1.0
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `value` is an `Arguments` object, else `false`.
 * @example
 *
 * isArguments((function() { return arguments })())
 * //=> true
 *
 * isArguments([1, 2, 3])
 * //=> false
 */
const isArguments = defn(
  'isArguments',
  'Checks if `any` is likely an `Arguments` object.',

  [Any, () => Boolean],
  is(Arguments)
)

export default isArguments
