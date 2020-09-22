import anyIsProperty from '../util/anyIsProperty'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Property = defineAny(
  'lang.Property',
  {
    description: 'A type representing a key for a Proped value.',
    since: 'v0.1.0'
  },

  definitionToType({
    is: anyIsProperty
  })
)

export default Property
