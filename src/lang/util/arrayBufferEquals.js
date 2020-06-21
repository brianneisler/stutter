import anyIsArrayBuffer from './anyIsArrayBuffer'
import createInt8Array from './createInt8Array'

const arrayBufferEquals = (arrayBuffer, any) => {
  if (!anyIsArrayBuffer(any)) {
    return false
  }
  if (arrayBuffer.byteLength != any.byteLength) {
    return false
  }
  const int8Array1 = createInt8Array(arrayBuffer)
  const int8Array2 = createInt8Array(any)
  for (let i = 0; i != arrayBuffer.byteLength; i++) {
    if (int8Array1[i] != int8Array2[i]) {
      return false
    }
  }
  return true
}

export default arrayBufferEquals
