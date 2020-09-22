import Any from '../types/Any'
import Boolean from '../types/Boolean'
import Self from '../types/Self'
import defineAny from '../util/defineAny'
import definitionsToProtocol from '../util/definitionsToProtocol'

const Typed = defineAny(
  'lang.Typed',
  {
    description: 'A protocol for handling the typing of a value',
    since: 'v0.1.0'
  },

  definitionsToProtocol({
    is: [Self, Any, () => Boolean],
    to: [Self, Any, () => Self]
  })
)

export default Typed
