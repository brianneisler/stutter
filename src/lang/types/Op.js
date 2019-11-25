import anyIsOp from '../util/anyIsOp'
import deftype from '../deftype'

const Op = deftype('lang.Op', 'A value that represents an operation', {
  is: anyIsOp
})

export default Op
