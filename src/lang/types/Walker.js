import anyIsWalker from '../util/anyIsWalker'
import anyToWalker from '../util/anyToWalker'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Walker = defineAny(
  'lang.Walker',
  {
    description: 'A type representing a Walker.',
    since: 'v0.1.0'
  },
  definitionToType({
    is: anyIsWalker,
    to: anyToWalker
  })
)

export default Walker
