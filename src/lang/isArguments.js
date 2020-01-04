import Arguments from './types/Arguments'
import def from './def'
import is from './is'

/**
 * @since v0.1.0
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `value` is an `Arguments` object, else `false`.
 * @example
 *

 */
const isArguments = def(
  'lang.isArguments',
  {
    description: 'Checks if `Any` is classified as an `Arguments` type.',
    since: 'v0.2.0'
  },

  is(Arguments)
)

export default isArguments
