import anyIsUndefined from '../util/anyIsUndefined'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Undefined = defineAny(
  'lang.Undefined',
  {
    description: 'A type representing an `undefined` value.',
    since: 'v0.1.0'
  },

  definitionToType({
    is: anyIsUndefined
  })
)

export default Undefined
