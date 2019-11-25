import anyIsArrayBuffer from '../util/anyIsArrayBuffer'
import deftype from '../deftype'

const ArrayBuffer = deftype(
  'lang.ArrayBuffer',
  'A type that represents a generic, fixed-length raw binary data buffer.',
  {
    is: anyIsArrayBuffer
  }
)

export default ArrayBuffer
