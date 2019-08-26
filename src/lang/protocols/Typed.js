import Any from '../types/Any'
import Self from '../types/Self'
import defineAny from '../util/defineAny'
import definitionsToProtocol from '../util/definitionsToProtocol'

const Typed = defineAny(
  'lang.Typed',
  'A protocol for handling the typing of a value',
  definitionsToProtocol({
    is: [Self, Any],
    to: [Self, Any]
  })
)

export default Typed
