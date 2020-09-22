import Equatable from '../protocols/Equatable'
import anyIsArrayBuffer from '../util/anyIsArrayBuffer'
import arrayBufferEquals from '../util/arrayBufferEquals'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'

import Any from './Any'
import Boolean from './Boolean'
import Self from './Self'

const ArrayBuffer = defineAny(
  'lang.ArrayBuffer',
  {
    description:
      'A type that represents a generic, fixed-length raw binary data buffer.',
    since: 'v0.1.0'
  },

  definitionToType({
    is: anyIsArrayBuffer,
    protocols: [
      Equatable,
      {
        'lang.equals': definitionsToFn([
          [Self, Any, () => Boolean],
          arrayBufferEquals,

          [Any, Self, () => Boolean],
          (any, arrayBuffer) => arrayBufferEquals(arrayBuffer, any)
        ])
      }
    ]
  })
)

export default ArrayBuffer
