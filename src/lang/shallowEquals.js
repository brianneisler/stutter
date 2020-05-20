import Any from './types/Any'
import Boolean from './types/Boolean'
import defn from './defn'
import objectShallowEquals from './util/objectShallowEquals'

const shallowEquals = defn(
  'lang.shallowEquals',
  {
    description:
      'Performs equality by iterating through keys on an object and returning false when any key has values which are not strictly equal between the arguments. Returns true when the values of all keys are strictly equal.',
    since: 'v0.2.0'
  },

  [Any, Any, () => Boolean],
  (valueA, valueB) => objectShallowEquals(valueA, valueB)
)

export default shallowEquals
