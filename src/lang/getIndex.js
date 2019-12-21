import Any from './types/Any'
import Array from './types/Array'
import Character from './types/Character'
import ImmutableList from './types/ImmutableList'
import Index from './types/IndexType'
import arrayGetIndex from './util/arrayGetIndex'
import defn from './defn'
import stringGetIndex from './util/stringGetIndex'

/**
 * @since v0.1.0
 * @param {Index} index The Index to use.
 * @param {Object} value The value to retrieve the nested property from.
 * @returns {*} The data at `path`.
 * @example
 *
 * getIndex(0, [ 1, 2 ])
 * //=> 1
 *
 * getIndex(1, 'bar'))
 * //=> 'a'
 *
 * getIndex(1, ImmutableList([ 1, 2 ]))
 * //=> 2
 */
const getIndex = defn(
  'lang.getIndex',
  'Retrieve the value at a given Index from an Indexed collection',

  [Index, Array, () => Any],
  (index, array) => arrayGetIndex(array, index),

  [Array, Index, () => Any],
  (array, index) => arrayGetIndex(array, index),

  [Index, ImmutableList, () => Any],
  (index, immutableList) => immutableList.get(index),

  [ImmutableList, Index, () => Any],
  (immutableList, index) => immutableList.get(index),

  [Index, String, () => Character],
  (index, string) => stringGetIndex(string, index),

  [String, Index, () => Character],
  (string, index) => stringGetIndex(string, index)
)

export default getIndex
