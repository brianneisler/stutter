import fn from './fn'
import isArrayLike from './isArrayLike'
import isObjectLike from './isObjectLike'

const isArrayLikeObject = fn((value) => {
  return isObjectLike(value) && isArrayLike(value)
})

export default isArrayLikeObject
