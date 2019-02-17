import _WeakSet from '../util/js/WeakSet'
import anyIsWeakSet from '../util/anyIsWeakSet'
import deftype from '../deftype'

const WeakSet = deftype('WeakSet', 'A type representing a WeakSet.', {
  class: _WeakSet,
  is: anyIsWeakSet
})

export default WeakSet
