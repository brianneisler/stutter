import nativeIsBuffer from './util/nativeIsBuffer'
import fn from './fn'

const isBuffer = fn(nativeIsBuffer || (() => false))

export default isBuffer
