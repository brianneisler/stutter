import _WeakMap from '../util/js/WeakMap'
import anyIsWeakMap from '../util/anyIsWeakMap'
import deftype from '../deftype'

const WeakMap = deftype('WeakMap', 'A type representing a WeakMap.', {
  class: _WeakMap,
  is: anyIsWeakMap
})

export default WeakMap
