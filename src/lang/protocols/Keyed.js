import Any from '../types/Any'
import Boolean from '../types/Boolean'
import Key from '../types/Key'
import Self from '../types/Self'
import defineAny from '../util/defineAny'
import definitionsToProtocol from '../util/definitionsToProtocol'

const Keyed = defineAny(
  'lang.Keyed',
  'A protocol for accessing values stored using keys',

  definitionsToProtocol({
    'lang.deleteKey': [Self, Key, () => Self],
    'lang.getKey': [Self, Key, () => Any],
    'lang.hasKey': [Self, Key, () => Boolean],
    'lang.setKey': [Self, Key, Any, () => Self]
  })
)

export default Keyed
