import _Map from '../util/js/Map'
import anyIsMap from '../util/anyIsMap'
import deftype from '../deftype'

const Map = deftype('lang.Map', 'A type representing a Map.', {
  class: _Map,
  is: anyIsMap
})

export default Map
