import _ImmutableSet from '../classes/ImmutableSet'
import anyIsImmutableSet from '../util/anyIsImmutableSet'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const ImmutableSet = defineAny(
  'lang.ImmutableSet',
  {
    description: 'A type representing a ImmutableSet.'
  },
  definitionToType({
    class: _ImmutableSet,
    is: anyIsImmutableSet
  })
)

export default ImmutableSet
