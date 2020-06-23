import Any from './Any'
import Boolean from './Boolean'
import Key from './Key'
import Keyed from '../protocols/Keyed'
import Self from './Self'
import _ImmutableMap from '../classes/ImmutableMap'
import anyIsImmutableMap from '../util/anyIsImmutableMap'
import deftype from '../deftype'
import fn from '../fn'
import keyedDeleteKey from '../util/keyedDeleteKey'
import keyedGetKey from '../util/keyedGetKey'
import keyedHasKey from '../util/keyedHasKey'
import keyedSetKey from '../util/keyedSetKey'

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
          keyedDeleteKey,

          [Key, Self, () => Self],
          (key, self) => keyedDeleteKey(self, key)
        ),
        'lang.getKey': fn(
          [Self, Key, () => Any],
          keyedGetKey,

          [Key, Self, () => Any],
          (key, self) => keyedGetKey(self, key)
        ),
        'lang.hasKey': fn(
          [Self, Key, () => Boolean],
          keyedHasKey,

          [Key, Self, () => Boolean],
          (key, self) => keyedHasKey(self, key)
        ),
        'lang.setKey': fn(
          [Self, Key, Any, () => Self],
          keyedSetKey,

          [Key, Any, Self, () => Self],
          (key, any, self) => keyedSetKey(self, key, any)
        )
      }
    ]
  }
)

export default ImmutableMap
