import _cloneRegExp from './_cloneRegExp'
import type from '../type'

/**
 * Copies an object.
 *
 * @function
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */
export default function _clone(value, refFrom, refTo, deep) {
  const copy = function copy(copiedValue) {
    const len = refFrom.length
    let idx = 0
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx]
      }
      idx += 1
    }
    refFrom[idx + 1] = value
    refTo[idx + 1] = copiedValue
    for (const key in value) {
      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key]
    }
    return copiedValue
  }
  switch (type(value)) {
    case 'Object':
      return copy({})
    case 'Array':
      return copy([])
    case 'Date':
      return new Date(value.valueOf())
    case 'RegExp':
      return _cloneRegExp(value)
    default:
      return value
  }
}
