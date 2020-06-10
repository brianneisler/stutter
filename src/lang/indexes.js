import { arrayIndexIterator, iteratorToArray } from './util'
import isArray from './isArray'
import satisfiesIndexed from './satisfiesIndexed'

const indexes = (value) => {
  if (satisfiesIndexed(value)) {
    if (isArray(value)) {
      return iteratorToArray(arrayIndexIterator(value))
    }
    return value.keySeq().toList()
  }
  throw new Error(`value is not Indexed ${value}`)
}

export default indexes
