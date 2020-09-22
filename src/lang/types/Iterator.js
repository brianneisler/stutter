import anyIsIterator from '../util/anyIsIterator'
import anyToIterator from '../util/anyToIterator'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Iterator = defineAny(
  'lang.Iterator',
  {
    description: 'A type representing an Iterator.',
    since: 'v0.1.0'
  },
  definitionToType({
    is: anyIsIterator,
    to: anyToIterator
  })
)

export default Iterator
