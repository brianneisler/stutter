import Any from './Any'
import Boolean from './Boolean'
import Character from './Character'
import Index from './IndexType'
import Indexed from '../protocols/Indexed'
import Integer from './Integer'
import Self from './Self'
import _String from '../classes/String'
import anyIsString from '../util/anyIsString'
import anyToString from '../util/anyToString'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'
import stringDeleteIndex from '../util/stringDeleteIndex'
import stringGetIndex from '../util/stringGetIndex'
import stringHasIndex from '../util/stringHasIndex'
import stringLength from '../util/stringLength'
import stringSetIndex from '../util/stringSetIndex'

const String = defineAny(
  'lang.String',
  'A text value',

  definitionToType({
    class: _String,
    is: anyIsString,
    protocols: [
      Indexed,
      {
        'lang.deleteIndex': definitionsToFn([
          [Self, Index, () => Self],
          stringDeleteIndex,

          [Index, Self, () => Self],
          (index, self) => stringDeleteIndex(self, index)
        ]),
        'lang.getIndex': definitionsToFn([
          [Self, Index, () => Character],
          stringGetIndex,

          [Index, Self, () => Character],
          (index, self) => stringGetIndex(self, index)
        ]),
        'lang.hasIndex': definitionsToFn([
          [Self, Index, () => Boolean],
          stringHasIndex,

          [Index, Self, () => Boolean],
          (index, self) => stringHasIndex(self, index)
        ]),
        'lang.setIndex': definitionsToFn([
          [Self, Index, Any, () => Self],
          stringSetIndex,

          [Index, Any, Self, () => Self],
          (index, any, self) => stringSetIndex(self, index, any)
        ]),
        'lang.size': definitionsToFn([[Self, () => Integer], stringLength])
      }
    ],
    to: anyToString
  })
)

export default String
