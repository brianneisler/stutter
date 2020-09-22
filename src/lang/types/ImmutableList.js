import _ImmutableList from '../classes/ImmutableList'
import Indexed from '../protocols/Indexed'
import anyIsImmutableList from '../util/anyIsImmutableList'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'
import immutableListDeleteIndex from '../util/immutableListDeleteIndex'
import immutableListGetIndex from '../util/immutableListGetIndex'
import immutableListHasIndex from '../util/immutableListHasIndex'
import immutableListLength from '../util/immutableListLength'
import immutableListSetIndex from '../util/immutableListSetIndex'

import Any from './Any'
import Boolean from './Boolean'
import Index from './IndexType'
import Integer from './Integer'
import Self from './Self'

const ImmutableList = defineAny(
  'lang.ImmutableList',
  {
    description: 'A type representing a ImmutableList.',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _ImmutableList,
    is: anyIsImmutableList,

    protocols: [
      Indexed,
      {
        'lang.deleteIndex': definitionsToFn([
          [Self, Index, () => Self],
          immutableListDeleteIndex,

          [Index, Self, () => Self],
          (index, self) => immutableListDeleteIndex(self, index)
        ]),
        'lang.getIndex': definitionsToFn([
          [Self, Index, () => Any],
          immutableListGetIndex,

          [Index, Self, () => Any],
          (index, self) => immutableListGetIndex(self, index)
        ]),
        'lang.hasIndex': definitionsToFn([
          [Self, Index, () => Boolean],
          immutableListHasIndex,

          [Index, Self, () => Boolean],
          (index, self) => immutableListHasIndex(self, index)
        ]),
        'lang.setIndex': definitionsToFn([
          [Self, Index, Any, () => Self],
          immutableListSetIndex,

          [Index, Any, Self, () => Self],
          (index, any, self) => immutableListSetIndex(self, index, any)
        ]),
        'lang.size': definitionsToFn([
          [Self, () => Integer],
          immutableListLength
        ])
      }
    ]
  })
)

export default ImmutableList
