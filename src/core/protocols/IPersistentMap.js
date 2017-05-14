import Function from '../types/Function'
import extend from '../extend'
import Associative from './Associative'
import IterableEntries from './IterableEntries'
import IterableKeys from './IterableKeys'
import IterableValues from './IterableValues'

const IPersistentMap = extend([
  Associative,
  IterableEntries,
  IterableKeys,
  IterableValues
], {
  clear: Function,
  forEach: Function
})

export default IPersistentMap
