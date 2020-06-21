import Any from './Any'
import Boolean from './Boolean'
import Equatable from '../protocols/Equatable'
import Self from './Self'
import anyIsArrayBuffer from '../util/anyIsArrayBuffer'
import arrayBufferEquals from '../util/arrayBufferEquals'
import deftype from '../deftype'
import fn from '../fn'

const ArrayBuffer = deftype(
  'lang.ArrayBuffer',
  {
    description:
      'A type that represents a generic, fixed-length raw binary data buffer.',
    since: 'v0.1.0'
  },

  {
    is: anyIsArrayBuffer,
    protocols: [
      Equatable,
      {
        'lang.equals': fn(
          [Self, Any, () => Boolean],
          arrayBufferEquals,

          [Any, Self, () => Boolean],
          (any, arrayBuffer) => arrayBufferEquals(arrayBuffer, any)
        )
      }
    ]
  }
)

export default ArrayBuffer
