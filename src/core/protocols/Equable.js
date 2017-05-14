import Function from '../types/Function'
import extend from '../extend'
import Hashable from './Hashable'

const Equable = extend(Hashable, {
  equals: Function
})

export default Equable
