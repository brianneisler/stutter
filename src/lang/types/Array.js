import Any from './Any'
import Boolean from './Boolean'
import Index from './IndexType'
import Indexed from '../protocols/Indexed'
import Integer from './Integer'
import Self from './Self'
import _Array from '../util/js/Array'
import anyIsArray from '../util/anyIsArray'
import anyToArray from '../util/anyToArray'
import arrayDeleteIndex from '../util/arrayDeleteIndex'
import arrayGetIndex from '../util/arrayGetIndex'
import arrayHasIndex from '../util/arrayHasIndex'
import arrayLength from '../util/arrayLength'
import arraySetIndex from '../util/arraySetIndex'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'

const Array = defineAny(
  'lang.Array',
  'A high-level, list-like object',

  definitionToType({
    class: _Array,
    is: anyIsArray,
    protocols: [
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
        'lang.length': definitionsToFn([[Self, () => Integer], arrayLength]),
        'lang.setIndex': definitionsToFn([
          [Self, Index, Any, () => Self],
          arraySetIndex,

          [Index, Any, Self, () => Self],
          (index, any, self) => arraySetIndex(self, index, any)
        ])
      }
    ],
    to: anyToArray
  })
)

export default Array
