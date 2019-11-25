import anyIsIterator from '../util/anyIsIterator'
import anyToIterator from '../util/anyToIterator'
import deftype from '../deftype'

const Iterator = deftype('lang.Iterator', 'A type representing an Iterator.', {
  is: anyIsIterator,
  to: anyToIterator
})

export default Iterator
