import _ImmutableMap from '../classes/ImmutableMap'
import Keyed from '../protocols/Keyed'
import anyIsImmutableMap from '../util/anyIsImmutableMap'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'
import keyedDeleteKey from '../util/keyedDeleteKey'
import keyedGetKey from '../util/keyedGetKey'
import keyedHasKey from '../util/keyedHasKey'
import keyedSetKey from '../util/keyedSetKey'

import Any from './Any'
import Boolean from './Boolean'
import Key from './Key'
import Self from './Self'

const ImmutableMap = defineAny(
  'lang.ImmutableMap',
  {
    description: 'A type representing a ImmutableMap.',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _ImmutableMap,
    is: anyIsImmutableMap,
    protocols: [
      Keyed,
      {
        'lang.deleteKey': definitionsToFn([
          [Self, Key, () => Self],
          keyedDeleteKey,

          [Key, Self, () => Self],
          (key, self) => keyedDeleteKey(self, key)
        ]),
        'lang.getKey': definitionsToFn([
          [Self, Key, () => Any],
          keyedGetKey,

          [Key, Self, () => Any],
          (key, self) => keyedGetKey(self, key)
        ]),
        'lang.hasKey': definitionsToFn([
          [Self, Key, () => Boolean],
          keyedHasKey,

          [Key, Self, () => Boolean],
          (key, self) => keyedHasKey(self, key)
        ]),
        'lang.setKey': definitionsToFn([
          [Self, Key, Any, () => Self],
          keyedSetKey,

          [Key, Any, Self, () => Self],
          (key, any, self) => keyedSetKey(self, key, any)
        ])
      }
    ]
  })
)

export default ImmutableMap
