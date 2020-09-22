import anyIsImmutableCollection from '../util/anyIsImmutableCollection'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const ImmutableCollection = defineAny(
  'lang.ImmutableCollection',
  {
    description: 'A type representing a ImmutableCollection.',
    since: 'v0.1.0'
  },
  definitionToType({
    is: anyIsImmutableCollection
  })
)

export default ImmutableCollection
