import Any from './types/Any'
import Protocol from './types/Protocol'
import Type from './types/Type'
import defn from './defn'

const extend = defn(
  'extend',
  'takes a type and one or more protocol and method implementations. Will extend the given type with the given protocol implementations.',

  [Type, Protocol, Object, () => Type],
  () => {
    throw new Error('Not yet implemented')
  },

  [Type, Protocol, Object, Any, () => Type],
  () => {
    throw new Error('Not yet implemented')
  }
)

export default extend
