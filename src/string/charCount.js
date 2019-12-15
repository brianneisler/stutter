import Integer from '../lang/types/Integer'
import String from '../lang/types/String'
import defn from '../lang/defn'
import stringSize from '../lang/util/stringSize'

const charCount = defn(
  'charCount',
  'counts the number of whild characters in a string',

  [String, () => Integer],
  (string) => stringSize(string)
)

export default charCount
