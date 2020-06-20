import anyIsArray from './anyIsArray'
import arrayLikeEquals from './arrayLikeEquals'

const arrayEquals = (array, any, ...args) => {
  if (!anyIsArray(any)) {
    return false
  }
  return arrayLikeEquals(array, any, ...args)
}

export default arrayEquals
