import Function from '../types/Function'
import protocol from '../protocol'

const IPersistentStack = protocol({
  peek: Function,
  pop: Function,
  push: Function
})

export default IPersistentStack
