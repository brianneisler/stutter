import isArray from '../isArray'
import arrayPush from './arrayPush'

export default function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  const result = keysFunc(object)
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object))
}
