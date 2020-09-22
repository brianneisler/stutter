import Self from '../types/Self'
import Walker from '../types/Walker'
import defineAny from '../util/defineAny'
import definitionsToProtocol from '../util/definitionsToProtocol'

const Walkable = defineAny(
  'lang.Walkable',
  {
    description: 'A protocol for walking a given Keyed, Indexed or Propertied',
    since: 'v0.2.0'
  },

  definitionsToProtocol({
    'lang.walker': [Self, () => Walker]
  })
)

export default Walkable
