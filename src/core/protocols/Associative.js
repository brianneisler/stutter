import Function from '../types/Function'
import extend from '../extend'
import Keyed from './Keyed'

const Associative = extend(Keyed, {
  delete: Function,
  set: Function
})

export default Associative
