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
  'A type that represents a generic, fixed-length raw binary data buffer.',
  {
    is: anyIsArrayBuffer,
    protocols: [
      Equatable,
      {
        'lang.equals': fn(
          [Self, Any, () => Boolean],
          arrayBufferEquals,

          [Any, Self, () => Boolean],
          arrayBufferEquals
        )
      }
    ]
  }
)

export default ArrayBuffer
