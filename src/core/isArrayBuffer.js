import { ARRAY_BUFFER_TAG } from './util/constants'
import getTag from './util/getTag'
import nodeIsArrayBuffer from './util/nodeIsArrayBuffer'
import fn from './fn'
import isObjectLike from './isObjectLike'

const isArrayBuffer = nodeIsArrayBuffer
  ? fn((value) => nodeIsArrayBuffer(value))
  : fn((value) => isObjectLike(value) && getTag(value) === ARRAY_BUFFER_TAG)

export default isArrayBuffer
