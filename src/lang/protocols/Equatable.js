import Boolean from '../classes/Boolean'
import Any from '../types/Any'
import Self from '../types/Self'
import defineAny from '../util/defineAny'
import definitionsToProtocol from '../util/definitionsToProtocol'

const Equatable = defineAny(
  'lang.Equatable',
  {
    description: 'A protocol for assessing equality',
    since: 'v0.2.0'
  },

  definitionsToProtocol({
    'lang.equals': [Self, Any, () => Boolean]
  })
)

export default Equatable
