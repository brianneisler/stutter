import FLAG_COMPARE_PARTIAL from '../constants/FLAG_COMPARE_PARTIAL'
import FLAG_COMPARE_UNORDERED from '../constants/FLAG_COMPARE_UNORDERED'
import TAG_ARRAY_BUFFER from '../constants/TAG_ARRAY_BUFFER'
import TAG_BOOLEAN from '../constants/TAG_BOOLEAN'
import TAG_DATA_VIEW from '../constants/TAG_DATA_VIEW'
import TAG_DATE from '../constants/TAG_DATE'
import TAG_ERROR from '../constants/TAG_ERROR'
import TAG_MAP from '../constants/TAG_MAP'
import TAG_NUMBER from '../constants/TAG_NUMBER'
import TAG_REGEXP from '../constants/TAG_REGEXP'
import TAG_SET from '../constants/TAG_SET'
import TAG_STRING from '../constants/TAG_STRING'
import TAG_SYMBOL from '../constants/TAG_SYMBOL'


import eq from '../eq'
import baseEqualArrays from './baseEqualArrays'
import { Uint8Array } from './context'
import nativeSymbolValueOf from './nativeSymbolValueOf'
import mapToArray from './mapToArray'
import setToArray from './setToArray'

export default function baseEqualByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  let convert
  let result
  let stacked
  const isPartial = bitmask & FLAG_COMPARE_PARTIAL

  switch (tag) {
    case TAG_DATA_VIEW:
      if ((object.byteLength != other.byteLength) ||
      (object.byteOffset != other.byteOffset)) {
        return false
      }
      object = object.buffer
      other = other.buffer
    case TAG_ARRAY_BUFFER:
      if ((object.byteLength != other.byteLength) ||
      !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false
      }
      return true

    case TAG_BOOLEAN:
    case TAG_DATE:
    case TAG_NUMBER:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other)

    case TAG_ERROR:
      return object.name == other.name && object.message == other.message

    case TAG_REGEXP:
    case TAG_STRING:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '')

    case TAG_MAP:
      convert = mapToArray

    case TAG_SET:
      convert || (convert = setToArray)

      if (object.size != other.size && !isPartial) {
        return false
      }
      // Assume cyclic values are equal.
      stacked = stack.get(object)
      if (stacked) {
        return stacked == other
      }
      bitmask |= FLAG_COMPARE_UNORDERED

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other)
      result = baseEqualArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack)
      stack['delete'](object)
      return result

    case TAG_SYMBOL:
      if (nativeSymbolValueOf) {
        return nativeSymbolValueOf.call(object) == nativeSymbolValueOf.call(other)
      }
  }
  return false
}
