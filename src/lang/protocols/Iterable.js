import Iterator from '../types/Iterator'
import Self from '../types/Self'
import defineAny from '../util/defineAny'
import definitionsToProtocol from '../util/definitionsToProtocol'

const Iterable = defineAny(
  'lang.Iterable',
  {
    description: "A protocol for exposing an iterator of the value's elements.",
    since: 'v0.2.0'
  },
  definitionsToProtocol({
    'lang.iterator': [Self, () => Iterator]
  })
)

export default Iterable
