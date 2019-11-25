import _Set from '../util/js/Set'
import anyIsSet from '../util/anyIsSet'
import deftype from '../deftype'

const Set = deftype('lang.Set', 'A type representing a Set.', {
  class: _Set,
  is: anyIsSet
})

export default Set
