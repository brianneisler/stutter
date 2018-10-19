import { TAG_BOOLEAN } from './constants'
import getTag from './util/getTag'
import isObjectLike from './isObjectLike'

export default function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && getTag(value) === TAG_BOOLEAN)
}
