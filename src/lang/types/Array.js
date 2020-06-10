import Any from './Any'
import Boolean from './Boolean'
import Equatable from '../protocols/Equatable'
import Index from './IndexType'
import Indexed from '../protocols/Indexed'
import Integer from './Integer'
import Self from './Self'
import _Array from '../util/js/Array'
import anyIsArray from '../util/anyIsArray'
import anyToArray from '../util/anyToArray'
import arrayDeleteIndex from '../util/arrayDeleteIndex'
import arrayEquals from '../util/arrayEquals'
import arrayGetIndex from '../util/arrayGetIndex'
import arrayHasIndex from '../util/arrayHasIndex'
import arrayLength from '../util/arrayLength'
import arraySetIndex from '../util/arraySetIndex'
import definitionsToFn from '../util/definitionsToFn'
import deftype from '../deftype'
import equals from '../equals'

const Array = deftype(
  'lang.Array',
  'A high-level, list-like object',

  {
    class: _Array,
    is: anyIsArray,
    protocols: [
      Equatable,
      {
        'lang.equals': definitionsToFn([
          [Self, Any, () => Boolean],
          (self, any) => arrayEquals(self, any, equals),

          [Any, Self, () => Boolean],
          (any, self) => arrayEquals(self, any, equals)
        ])
      },

      Indexed,
      {
        'lang.deleteIndex': definitionsToFn([
          [Self, Index, () => Self],
          arrayDeleteIndex,

          [Index, Self, () => Self],
          (index, self) => arrayDeleteIndex(self, index)
        ]),
        'lang.getIndex': definitionsToFn([
          [Self, Index, () => Any],
          arrayGetIndex,

          [Index, Self, () => Any],
          (index, self) => arrayGetIndex(self, index)
        ]),
        'lang.hasIndex': definitionsToFn([
          [Self, Index, () => Boolean],
          arrayHasIndex,

          [Index, Self, () => Boolean],
          (index, self) => arrayHasIndex(self, index)
        ]),
        'lang.setIndex': definitionsToFn([
          [Self, Index, Any, () => Self],
          arraySetIndex,

          [Index, Any, Self, () => Self],
          (index, any, self) => arraySetIndex(self, index, any)
        ]),
        'lang.size': definitionsToFn([[Self, () => Integer], arrayLength])
      }
    ],
    to: anyToArray
  }
)

export default Array
