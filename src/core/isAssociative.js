import fn from './fn'
import isIndexed from './isIndexed'
import isKeyed from './isKeyed'

const isAssociative = fn((value) => {
  return isKeyed(value) || isIndexed(value)
})

export default isAssociative
