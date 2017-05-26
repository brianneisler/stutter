
import { baseSet } from './base'
import forEach from './forEach'
import isString from './isString'
import setKey from './setKey'

export default function assoc(data, key, value) {
  if (isString(path)) {
    data = baseSet(data, key, value, setKey)
  } else {
    //TODO BRN: Improve this so that it uses withMutations when making multiple modifications
    forEach(path, (pathValue, pathKey) => {
      data = baseSet(data, pathKey, pathValue, setKey)
    })
  }
  return data
}
