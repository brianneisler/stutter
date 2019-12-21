import Any from '../types/Any'
import Boolean from '../types/Boolean'
import Index from '../types/IndexType'
import Integer from '../types/Integer'
import Self from '../types/Self'
import defineAny from '../util/defineAny'
import definitionsToProtocol from '../util/definitionsToProtocol'

const Indexed = defineAny(
  'lang.Indexed',
  'A protocol for accessing values stored using Indexes',

  definitionsToProtocol({
    'lang.deleteIndex': [Self, Index, () => Self],
    'lang.getIndex': [Self, Index, () => Any],
    'lang.hasIndex': [Self, Index, () => Boolean],
    'lang.length': [Self, () => Integer],
    'lang.setIndex': [Self, Index, Any, () => Self]
  })
)

export default Indexed
