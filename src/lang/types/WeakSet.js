import _WeakSet from '../classes/WeakSet'
import anyIsWeakSet from '../util/anyIsWeakSet'
import deftype from '../deftype'

const WeakSet = deftype('lang.WeakSet', 'A type representing a WeakSet.', {
  class: _WeakSet,
  is: anyIsWeakSet
})

export default WeakSet
