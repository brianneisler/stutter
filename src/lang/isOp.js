// required
import Op from './types/Op'
import def from './def'
import is from './is'

const isOp = def(
  'lang.isOp',
  {
    description: 'Checks if `Any` is classified as an `Op` type.',
    since: 'v0.2.0'
  },

  is(Op)
)

export default isOp
