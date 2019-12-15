import Integer from '../lang/types/Integer'
import String from '../lang/types/String'
import createPadding from './createPadding'
import defn from '../lang/defn'
import stringSize from '../lang/util/stringSize'

const padStart = defn(
  'padStart',
  'Pad the start of a string',

  [String, Integer, String, () => String],
  (string, length, chars) => {
    const strLength = length ? stringSize(string) : 0
    return length && strLength < length ? createPadding(length - strLength, chars) + string : string
  }
)

export default padStart
