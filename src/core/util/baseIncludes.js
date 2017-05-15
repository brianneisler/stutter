import count from '../count'
import isString from '../isString'
import baseIndexOf from './baseIndexOf'
import nativeMax from './nativeMax'

export default function baseIncludes(indexed, value, fromIndex) {
  const length = count(indexed)
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0)
  }
  return isString(indexed)
    ? (fromIndex <= length && indexed.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(indexed, value, fromIndex) > -1)
}
