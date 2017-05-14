import SequableKeys from '../protocols/SequableKeys'
import isArrayLike from '../isArrayLike'
import arrayLikeKeys from './arrayLikeKeys'
import objectKeys from './objectKeys'

export default function baseKeys(data) {
  if (SequableKeys.is(data)) {
    return data.keySeq()
  } else if (isArrayLike(data)) {
    return arrayLikeKeys(data)
  }
  return objectKeys(data)
}
