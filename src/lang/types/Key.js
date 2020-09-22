import anyIsKey from '../util/anyIsKey'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Key = defineAny(
  'lang.Key',
  {
    description: 'A type representing a key for a Keyed value.',
    since: 'v0.1.0'
  },

  definitionToType({
    is: anyIsKey
  })
)

export default Key
