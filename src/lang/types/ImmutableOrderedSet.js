import _ImmutableOrderedSet from '../classes/ImmutableOrderedSet'
import anyIsImmutableOrderedSet from '../util/anyIsImmutableOrderedSet'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const ImmutableOrderedSet = defineAny(
  'lang.ImmutableOrderedSet',
  {
    description: 'A type representing a ImmutableOrderedSet.',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _ImmutableOrderedSet,
    is: anyIsImmutableOrderedSet
  })
)

export default ImmutableOrderedSet
