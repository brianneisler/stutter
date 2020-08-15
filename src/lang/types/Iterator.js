import deftype from '../deftype'
import anyIsIterator from '../util/anyIsIterator'
import anyToIterator from '../util/anyToIterator'

const Iterator = deftype(
  'lang.Iterator',
  {
    description: 'A type representing an Iterator.',
    since: 'v0.1.0'
  },
  {
    is: anyIsIterator,
    to: anyToIterator
  }
)

export default Iterator
