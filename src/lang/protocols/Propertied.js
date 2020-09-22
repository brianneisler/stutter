import Any from '../types/Any'
import Boolean from '../types/Boolean'
import Integer from '../types/Integer'
import Property from '../types/Property'
import Self from '../types/Self'
import defineAny from '../util/defineAny'
import definitionsToProtocol from '../util/definitionsToProtocol'

const Propertied = defineAny(
  'lang.Propertied',
  {
    description: 'A protocol for accessing values stored using Properties',
    since: 'v0.2.0'
  },

  definitionsToProtocol({
    'lang.deleteProperty': [Self, Property, () => Self],
    'lang.getProperty': [Self, Property, () => Any],
    'lang.hasOwnProperty': [Self, Property, () => Boolean],
    'lang.hasProperty': [Self, Property, () => Boolean],
    'lang.propertyIsEnumerable': [Self, Property, () => Boolean],
    'lang.setProperty': [Self, Property, Any, () => Self],
    'lang.size': [Self, () => Integer]
  })
)

export default Propertied
