import Any from './Any'
import Index from './IndexType'
import Indexed from '../protocols/Indexed'
import Integer from './Integer'
import Self from './Self'
import anyIsArguments from '../util/anyIsArguments'
import anyToArguments from '../util/anyToArguments'
import argumentsDeleteIndex from '../util/argumentsDeleteIndex'
import argumentsGetIndex from '../util/argumentsGetIndex'
import argumentsHasIndex from '../util/argumentsHasIndex'
import argumentsLength from '../util/argumentsLength'
import argumentsSetIndex from '../util/argumentsSetIndex'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'

/**
 * A `Type` representing a javascript `Arguments` object.
 *
 * @type Type
 * @since v0.1.0
 * @category lang
 * @example
 *
 */
const Arguments = defineAny(
  'lang.Arguments',
  'Arguments object in a function',

  definitionToType({
    is: anyIsArguments,
    protocols: [
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
