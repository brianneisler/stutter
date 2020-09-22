import _Protocol from '../classes/Protocol'
import anyIsProtocol from '../util/anyIsProtocol'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Protocol = defineAny(
  'lang.Protocol',
  {
    description: 'A type representing a Protocol of functions',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _Protocol,
    is: (any) => anyIsProtocol(any),
    to: () => {
      throw new Error('Cannot convert Protocol to any other type')
    }
  })
)

export default Protocol
