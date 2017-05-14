import Function from '../types/Function'
import protocol from '../protocol'

const IPersistentList = protocol({
  clear: Function,
  delete: Function,
  get: Function,
  has: Function,
  insert: Function,
  pop: Function,
  push: Function,
  set: Function,
  shift: Function,
  unshift: Function
})

export default IPersistentList
