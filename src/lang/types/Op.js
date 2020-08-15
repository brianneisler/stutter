import _Op from '../classes/Op'
import deftype from '../deftype'
import anyIsOp from '../util/anyIsOp'

const Op = deftype(
  'lang.Op',
  {
    description: 'A value that represents an operation',
    since: 'v0.1.0'
  },
  {
    class: _Op,
    is: anyIsOp
  }
)

export default Op
