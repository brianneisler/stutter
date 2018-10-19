import Function from '../types/Function'
import protocol from '../protocol'

const Thenable = protocol({
  then: Function
})

export default Thenable
