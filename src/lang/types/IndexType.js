import anyIsIndex from '../util/anyIsIndex'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Index = defineAny(
  'lang.Index',
  {
    description: 'A type representing an index for an Indexed value.',
    since: 'v0.1.0'
  },

  definitionToType({
    is: anyIsIndex
  })
)

export default Index
