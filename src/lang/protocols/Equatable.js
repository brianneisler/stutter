import Any from '../types/Any'
import Boolean from '../classes/Boolean'
import Self from '../types/Self'
import defineAny from '../util/defineAny'
import definitionsToProtocol from '../util/definitionsToProtocol'

const Equatable = defineAny(
  'lang.Equatable',
  'A protocol for assessing equality',

  definitionsToProtocol({
    'lang.equals': [Self, Any, () => Boolean]
  })
)

export default Equatable
