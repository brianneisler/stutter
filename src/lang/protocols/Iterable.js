import Iterator from '../types/Iterator'
import Self from '../types/Self'
import defprotocol from '../defprotocol'

const Iterable = defprotocol(
  'lang.Iterable',
  "A protocol for exposing an iterator of the value's elements.",
  {
    'lang.iterator': [Self, () => Iterator]
  }
)

export default Iterable
