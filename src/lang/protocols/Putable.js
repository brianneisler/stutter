import Any from '../types/Any'
import Self from '../types/Self'
import defineAny from '../util/defineAny'
import definitionsToProtocol from '../util/definitionsToProtocol'

const Putable = defineAny(
  'lang.Putable',
  {
    description:
      'A protocol for putting one or more values into a target Sequable and returns a Sequable of the same type the new value added',
    since: 'v0.2.0'
  },

  definitionsToProtocol({
    'lang.put': [[Self, Any, () => Self]]
  })
)

export default Putable
