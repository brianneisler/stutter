import Any from './Any'
import Boolean from './Boolean'
import Equatable from '../protocols/Equatable'
import Index from './IndexType'
import Indexed from '../protocols/Indexed'
import Integer from './Integer'
import Self from './Self'
import anyIsArguments from '../util/anyIsArguments'
import anyToArguments from '../util/anyToArguments'
import argumentsDeleteIndex from '../util/argumentsDeleteIndex'
import argumentsEquals from '../util/argumentsEquals'
import argumentsGetIndex from '../util/argumentsGetIndex'
import argumentsHasIndex from '../util/argumentsHasIndex'
import argumentsLength from '../util/argumentsLength'
import argumentsSetIndex from '../util/argumentsSetIndex'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'

const Arguments = defineAny(
  'lang.Arguments',
  {
    description: 'A `Type` representing a javascript `Arguments` object.',
    since: 'v0.1.0'
  },

  definitionToType({
    is: anyIsArguments,
    protocols: [
      Equatable,
      {
        'lang.equals': definitionsToFn([
          [Self, Any, () => Boolean],
          argumentsEquals,

          [Any, Self, () => Boolean],
          argumentsEquals
        ])
      },

      Indexed,
      {
        'lang.deleteIndex': definitionsToFn([
          [Self, Index, () => Self],
          argumentsDeleteIndex,

          [Index, Self, () => Self],
          (index, self) => argumentsDeleteIndex(self, index)
        ]),
        'lang.getIndex': definitionsToFn([
          [Self, Index, () => Self],
          argumentsGetIndex,

          [Index, Self, () => Self],
          (index, self) => argumentsGetIndex(self, index)
        ]),
        'lang.hasIndex': definitionsToFn([
          [Self, Index, () => Self],
          argumentsHasIndex,

          [Index, Self, () => Self],
          (index, self) => argumentsHasIndex(self, index)
        ]),
        'lang.setIndex': definitionsToFn([
          [Self, Index, Any, () => Self],
          argumentsSetIndex,

          [Index, Any, Self, () => Self],
          (index, any, self) => argumentsSetIndex(self, index, any)
        ]),
        'lang.size': definitionsToFn([[Self, () => Integer], argumentsLength])
      }
    ],
    to: anyToArguments
  })
)

export default Arguments
