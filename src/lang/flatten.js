import Array from './types/Array'
import arrayFlatten from './util/arrayFlatten'
import defn from './defn'

const flatten = defn(
  'lang.flatten',
  {
    description:
      'Returns a new list by pulling every item out of it (and all its sub-arrays) and putting them in a new array, depth-first.',
    since: 'v0.2.0'
  },

  [Array, () => Array],
  arrayFlatten
)

export default flatten
