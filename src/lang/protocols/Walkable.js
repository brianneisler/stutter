import Self from '../types/Self'
import Walker from '../types/Walker'
import defprotocol from '../defprotocol'

const Walkable = defprotocol(
  'lang.Walkable',
  'A protocol for walking a given Keyed, Indexed or Propertied',
  {
    'lang.walker': [Self, () => Walker]
  }
)

export default Walkable
