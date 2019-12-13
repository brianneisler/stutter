import Op from './types/Op'
import def from './def'
import is from './is'

/**
 * @since v0.1.0
 * @param {*} value
 * @returns {boolean}
 * @example
 *
 * isOp({
 *   ['@@redux-saga/IO']: 'op'
 * })
 * //=> true
 */
const isOp = def(
  'isOp',
  'Checks if `Any` is classified as an `Op` type.',

  is(Op)
)

export default isOp
