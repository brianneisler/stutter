import arrayLikeCastSlice from '../lang/arrayLikeCastSlice'
import hasUnicode from './hasUnicode'
import repeat from './repeat'
import stringSize from '../lang/stringSize'
import stringToArray from './stringToArray'
import toString from '../lang/toString'

const createPadding = (length, chars) => {
  chars = chars === undefined ? ' ' : toString(chars)

  const charsLength = chars.length
  if (charsLength < 2) {
    return charsLength ? repeat(chars, length) : chars
  }
  const result = repeat(chars, Math.ceil(length / stringSize(chars)))
  return hasUnicode(chars)
    ? arrayLikeCastSlice(stringToArray(result), 0, length).join('')
    : result.slice(0, length)
}

export default createPadding
