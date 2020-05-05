import Any from './Any'
import Boolean from './Boolean'
import Key from './Key'
import Keyed from '../protocols/Keyed'
import Self from './Self'
import _ImmutableMap from '../util/js/ImmutableMap'
import anyIsImmutableMap from '../util/anyIsImmutableMap'
import deftype from '../deftype'
import fn from '../fn'
import immutableMapDeleteKey from '../util/immutableMapDeleteKey'
import immutableMapGetKey from '../util/immutableMapGetKey'
import immutableMapHasKey from '../util/immutableMapHasKey'
import immutableMapSetKey from '../util/immutableMapSetKey'

const ImmutableMap = deftype(
  'lang.ImmutableMap',
  {
    description: 'A type representing a ImmutableMap.',
    since: 'v0.1.0'
  },
  {
    class: _ImmutableMap,
    is: anyIsImmutableMap,
    protocols: [
      Keyed,
      {
        'lang.deleteKey': fn(
          [Self, Key, () => Self],
          immutableMapDeleteKey,

          [Key, Self, () => Self],
          (key, self) => immutableMapDeleteKey(self, key)
        ),
        'lang.getKey': fn(
          [Self, Key, () => Any],
          immutableMapGetKey,

          [Key, Self, () => Any],
          (key, self) => immutableMapGetKey(self, key)
        ),
        'lang.hasKey': fn(
          [Self, Key, () => Boolean],
          immutableMapHasKey,

          [Key, Self, () => Boolean],
          (key, self) => immutableMapHasKey(self, key)
        ),
        'lang.setKey': fn(
          [Self, Key, Any, () => Self],
          immutableMapSetKey,

          [Key, Any, Self, () => Self],
          (key, any, self) => immutableMapSetKey(self, key, any)
        )
      }
    ]
  }
)

export default ImmutableMap
