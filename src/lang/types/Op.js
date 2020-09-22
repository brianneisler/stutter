import _Op from '../classes/Op'
import anyIsOp from '../util/anyIsOp'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Op = defineAny(
  'lang.Op',
  {
    description: 'A value that represents an operation',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _Op,
    is: anyIsOp
  })
)

export default Op
