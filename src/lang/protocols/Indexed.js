import Any from '../types/Any'
import Boolean from '../types/Boolean'
import Index from '../types/IndexType'
import Integer from '../types/Integer'
import Self from '../types/Self'
import defineAny from '../util/defineAny'
import definitionsToProtocol from '../util/definitionsToProtocol'

const Indexed = defineAny(
  'lang.Indexed',
  {
    description: 'A protocol for accessing values stored using Indexes',
    since: 'v0.2.0'
  },

  definitionsToProtocol({
    'lang.deleteIndex': [Self, Index, () => Self],
    'lang.getIndex': [Self, Index, () => Any],
    'lang.hasIndex': [Self, Index, () => Boolean],
    'lang.setIndex': [Self, Index, Any, () => Self],
    'lang.size': [Self, () => Integer]
  })
)

export default Indexed
