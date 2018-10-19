import COMPARE_PARTIAL_FLAG from '../constants/FLAG_COMPARE_PARTIAL'
import TAG_ARGS from '../constants/TAG_ARGS'
import TAG_ARRAY from '../constants/TAG_ARRAY'
import TAG_OBJECT from '../constants/TAG_OBJECT'
import Stack from './Stack'
import contextHasOwnProperty from '../context/contextHasOwnProperty'
import copyObject from '../util/copyObject'
import getTag from '../util/getTag'
import isArray from '../isArray'
import isBuffer from '../isBuffer'
import baseEqualArrays from './baseEqualArrays'
import baseEqualByTag from './baseEqualByTag'
import baseEqualObjects from './baseEqualObjects'
import baseKeys from './baseKeys'


export default function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  let objIsArr    = isArray(object)
  const othIsArr  = isArray(other)
  let objTag      = objIsArr ? TAG_ARRAY : getTag(object)
  let othTag      = othIsArr ? TAG_ARRAY : getTag(other)

  if (objTag == TAG_ARGS) {
    objTag = TAG_OBJECT
    object = copyObject(object, baseKeys(object))
  }
  if (othTag == TAG_ARGS) {
    othTag = TAG_OBJECT
    other = copyObject(other, baseKeys(other))
  }

  let objIsObj = objTag == TAG_OBJECT
  const othIsObj = othTag == TAG_OBJECT
  const isSameTag = objTag == othTag

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false
    }
    objIsArr = true
    objIsObj = false
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack)
    return (objIsArr || _.isTypedArray(object))
      ? baseEqualArrays(object, other, bitmask, customizer, equalFunc, stack)
      : baseEqualByTag(object, other, objTag, bitmask, customizer, equalFunc, stack)
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    const objIsWrapped = objIsObj && contextHasOwnProperty.call(object, '__wrapped__')
    const othIsWrapped = othIsObj && contextHasOwnProperty.call(other, '__wrapped__')

    if (objIsWrapped || othIsWrapped) {
      const objUnwrapped = objIsWrapped ? object.value() : object
      const othUnwrapped = othIsWrapped ? other.value() : other

      stack || (stack = new Stack)
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack)
    }
  }
  if (!isSameTag) {
    return false
  }
  stack = stack || new Stack
  return baseEqualObjects(object, other, bitmask, customizer, equalFunc, stack)
}
