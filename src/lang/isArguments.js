import Arguments from './types/Arguments'
import def from './def'
import is from './is'

/**
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
const isArguments = def(
  'lang.isArguments',
  'Checks if `Any` is classified as an `Arguments` type.',

  is(Arguments)
)

export default isArguments
