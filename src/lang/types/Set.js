import _Set from '../classes/Set'
import anyIsSet from '../util/anyIsSet'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Set = defineAny(
  'lang.Set',
  {
    description: 'A type representing a Set.',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _Set,
    is: anyIsSet
  })
)

export default Set
