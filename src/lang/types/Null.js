import anyIsNull from '../util/anyIsNull'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Null = defineAny(
  'lang.Null',
  {
    description: 'A type representing a `null` value.',
    since: 'v0.1.0'
  },

  definitionToType({
    is: anyIsNull
  })
)

export default Null
