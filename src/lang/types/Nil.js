import anyIsNil from '../util/anyIsNil'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Nil = defineAny(
  'lang.Nil',
  {
    description: 'A type representing a null or undefined value.',
    since: 'v0.1.0'
  },

  definitionToType({
    is: anyIsNil
  })
)

export default Nil
