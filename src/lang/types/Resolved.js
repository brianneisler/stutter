import anyIsResolved from '../util/anyIsResolved'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Resolved = defineAny(
  'lang.Resolved',
  {
    description: 'A type representing a Resolved value.',
    since: 'v0.1.0'
  },
  definitionToType({
    is: anyIsResolved
  })
)

export default Resolved
