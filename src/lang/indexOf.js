import { arrayIndexOfAtIndex } from './util'
import Any from './types/Any'
import Array from './types/Array'
import Integer from './types/Integer'
import defn from './defn'
import equals from './equals'

const indexOf = defn(
  'lang.indexOf',
  {
    description: `Returns the position of the first occurrence of an item in the given Indexed value, or -1 if the item is not included in the Indexed. 'equals' is used to determine equality.`,
    since: 'v0.1.0'
  },

  [Array, Any, () => Integer],
  (array, value) => arrayIndexOfAtIndex(array, value, 0, equals)
)

export default indexOf
