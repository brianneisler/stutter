import defprotocol from '../defprotocol'
import Any from '../types/Any'
import Self from '../types/Self'

const Putable = defprotocol(
  'lang.Putable',
  {
    description:
      'A protocol for putting one or more values into a target Sequable and returns a Sequable of the same type the new value added',
    since: 'v0.2.0'
  },
  {
    'lang.put': [[Self, Any, () => Self]]
  }
)

export default Putable
