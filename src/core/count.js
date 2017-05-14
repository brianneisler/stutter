import Countable from './protocols/Countable'
import { MAP_TAG, SET_TAG } from './util/constants'
import getTag from './util/getTag'
import stringSize from './util/stringSize'
import isArrayLike from './isArrayLike'
import isString from './isString'
import keys from './keys'

export default function count(data) {
  if (data == null) {
    return 0
  }
  if (Countable.is(data)) {
    return data.count()
  }
  if (isArrayLike(data)) {
    return isString(data) ? stringSize(data) : data.length
  }
  const tag = getTag(data)
  if (tag == MAP_TAG || tag == SET_TAG) {
    return data.size
  }
  return keys(data).length
}
