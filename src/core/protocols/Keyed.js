import Function from '../types/Function'
import protocol from '../protocol'

const Keyed = protocol({
  get: Function,
  has: Function
})

export default Keyed
