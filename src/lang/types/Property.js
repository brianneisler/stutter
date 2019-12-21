import anyIsProperty from '../util/anyIsProperty'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Property = defineAny(
  'lang.Property',
  'A type representing a key for a Proped value.',

  definitionToType({
    is: anyIsProperty
  })
)

export default Property
