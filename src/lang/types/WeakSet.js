import _WeakSet from '../classes/WeakSet'
import anyIsWeakSet from '../util/anyIsWeakSet'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const WeakSet = defineAny(
  'lang.WeakSet',
  {
    description: 'A type representing a WeakSet.',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _WeakSet,
    is: anyIsWeakSet
  })
)

export default WeakSet
