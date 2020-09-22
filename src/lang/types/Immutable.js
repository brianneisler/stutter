import anyIsImmutable from '../util/anyIsImmutable'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Immutable = defineAny(
  'lang.Immutable',
  {
    description: 'A type representing a value that is Immutable.',
    since: 'v0.1.0'
  },
  definitionToType({
    is: anyIsImmutable
  })
)

export default Immutable
