import _Promise from '../classes/Promise'
import anyIsPromise from '../util/anyIsPromise'
import anyToPromise from '../util/anyToPromise'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Promise = defineAny(
  'lang.Promise',
  {
    description: 'A type representing a Promise.',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _Promise,
    is: anyIsPromise,
    to: anyToPromise
  })
)

export default Promise
