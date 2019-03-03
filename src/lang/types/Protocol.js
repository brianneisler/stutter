import _Protocol from '../util/js/Protocol'
import anyIsProtocol from '../util/anyIsProtocol'
import deftype from '../deftype'

const Protocol = deftype('Protocol', 'A type representing a Protocol of functions', {
  class: _Protocol,
  is: (any) => anyIsProtocol(any),
  to: () => {
    throw new Error('Cannot convert Protocol to any other type')
  }
})

export default Protocol
