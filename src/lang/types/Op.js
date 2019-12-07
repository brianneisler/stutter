import _Op from '../util/js/Op'
import anyIsOp from '../util/anyIsOp'
import deftype from '../deftype'

const Op = deftype('lang.Op', 'A value that represents an operation', {
  class: _Op,
  is: anyIsOp
})

export default Op
