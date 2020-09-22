import _ImmutableOrderedMap from '../classes/ImmutableOrderedMap'
import anyIsImmutableOrderedMap from '../util/anyIsImmutableOrderedMap'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const ImmutableOrderedMap = defineAny(
  'lang.ImmutableOrderedMap',
  {
    description: 'A type representing a ImmutableOrderedMap.',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _ImmutableOrderedMap,
    is: anyIsImmutableOrderedMap
  })
)

export default ImmutableOrderedMap
