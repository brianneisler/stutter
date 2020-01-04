import Any from './types/Any'
import ArrayBuffer from './types/ArrayBuffer'
import Boolean from './types/Boolean'
import defn from './defn'
import is from './is'

const isArrayBuffer = defn(
  'lang.isArrayBuffer',
  {
    description: 'Checks if `Any` is classified as an `ArrayBuffer` type.',
    since: 'v0.2.0'
  },

  [Any, () => Boolean],
  is(ArrayBuffer)
)

export default isArrayBuffer
