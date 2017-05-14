import Function from '../types/Function'
import protocol from '../protocol'

const IPersistentSet = protocol({
  add: Function,
  clear: Function,
  delete: Function,
  entries: Function,
  forEach: Function,
  has: Function,
  keys: Function,
  values: Function
})

export default IPersistentSet
