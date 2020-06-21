import Any from './Any'
import Boolean from './Boolean'
import Key from './Key'
import Keyed from '../protocols/Keyed'
import Self from './Self'
import _Map from '../classes/Map'
import anyIsMap from '../util/anyIsMap'
import definitionsToFn from '../util/definitionsToFn'
import deftype from '../deftype'
import mapDeleteKey from '../util/mapDeleteKey'
import mapGetKey from '../util/mapGetKey'
import mapHasKey from '../util/mapHasKey'
import mapSetKey from '../util/mapSetKey'

const Map = deftype(
  'lang.Map',
  'A type representing a Map.',

  {
    class: _Map,
    is: anyIsMap,
    protocols: [
      Keyed,
      {
        'lang.deleteKey': definitionsToFn([
          [Self, Key, () => Self],
          mapDeleteKey,

          [Key, Self, () => Self],
          (key, self) => mapDeleteKey(self, key)
        ]),
        'lang.getKey': definitionsToFn([
          [Self, Key, () => Any],
          mapGetKey,

          [Key, Self, () => Any],
          (key, self) => mapGetKey(self, key)
        ]),
        'lang.hasKey': definitionsToFn([
          [Self, Key, () => Boolean],
          mapHasKey,

          [Key, Self, () => Boolean],
          (key, self) => mapHasKey(self, key)
        ]),
        'lang.setKey': definitionsToFn([
          [Self, Key, Any, () => Self],
          mapSetKey,

          [Key, Any, Self, () => Self],
          (key, any, self) => mapSetKey(self, key, any)
        ])
      }
    ]
  }
)

export default Map
