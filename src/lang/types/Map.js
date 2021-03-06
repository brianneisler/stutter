import _Map from '../classes/Map'
import Keyed from '../protocols/Keyed'
import anyIsMap from '../util/anyIsMap'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'
import mapDeleteKey from '../util/mapDeleteKey'
import mapGetKey from '../util/mapGetKey'
import mapHasKey from '../util/mapHasKey'
import mapSetKey from '../util/mapSetKey'

import Any from './Any'
import Boolean from './Boolean'
import Key from './Key'
import Self from './Self'

const Map = defineAny(
  'lang.Map',
  {
    description: 'A type representing a Map.',
    since: 'v0.1.0'
  },

  definitionToType({
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
  })
)

export default Map
