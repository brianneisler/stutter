import Any from '../lang/types/Any'
import Integer from '../lang/types/Integer'
import String from '../lang/types/String'
import arrayLikeCastSlice from '../lang/util/arrayLikeCastSlice'
import defn from '../lang/defn'
import stringHasUnicodeSymbols from '../lang/util/stringHasUnicodeSymbols'
import stringRepeat from '../lang/util/stringRepeat'
import stringSize from '../lang/util/stringSize'
import stringToArray from '../lang/util/stringToArray'
import toString from '../lang/toString'

const stringPadding = (string, length) => {
  const stringLength = string.length
  if (stringLength < 2) {
    return stringLength ? stringRepeat(string, length) : string
  }
  const result = stringRepeat(string, Math.ceil(length / stringSize(string)))
  return stringHasUnicodeSymbols(string)
    ? arrayLikeCastSlice(stringToArray(result), 0, length).join('')
    : result.slice(0, length)
}

const createPadding = defn(
  'string.createPadding',
  'Pads a string',

  [Integer, String, () => String],
  (length, string) => stringPadding(string, length),

  [String, Integer, () => String],
  (string, length) => stringPadding(string, length),

  [Integer, Any, () => String],
  (length, any) => {
    const string = any === undefined ? ' ' : toString(any)
    return stringPadding(string, length)
  },

  [Any, Integer, () => String],
  (any, length) => {
    const string = any === undefined ? ' ' : toString(any)
    return stringPadding(string, length)
  }
)

export default createPadding
