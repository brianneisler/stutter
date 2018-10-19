import TAG_ARRAY_BUFFER from './constants/TAG_ARRAY_BUFFER'
import getTag from './util/getTag'
import nodeIsArrayBuffer from './util/nodeIsArrayBuffer'
import fn from './fn'
import isObjectLike from './isObjectLike'

const isArrayBuffer = nodeIsArrayBuffer
  ? fn((value) => nodeIsArrayBuffer(value))
  : fn((value) => isObjectLike(value) && getTag(value) === TAG_ARRAY_BUFFER)

export default isArrayBuffer
