// required
import Arguments from './types/Arguments'
import Array from './types/Array'
import Boolean from './types/Boolean'
import Buffer from './types/Buffer'
import ImmutableList from './types/ImmutableList'
import ImmutableMap from './types/ImmutableMap'
import Map from './types/Map'
import Nil from './types/Nil'
import Prototype from './types/Prototype'
import Set from './types/Set'
import String from './types/String'
import TypedArray from './types/TypedArray'
import defn from './defn'
import objectHasOwnProperty from './util/objectHasOwnProperty'
import objectKeys from './util/objectKeys'

const isEmpty = defn(
  'lang.isEmpty',
  {
    description: `Checks if \`value\` is an empty object, collection, map, or set.

      Objects are considered empty if they have no own enumerable string keyed properties.

      Array-like values such as \`arguments\` objects, arrays, buffers, strings, or

      Similarly, maps and sets are considered empty if they have a \`size\` of \`0\`.`,
    since: 'v0.2.0'
  },

  [Nil, () => Boolean],
  // eslint-disable-next-line no-unused-vars
  (nil) => true,

  [Arguments, () => Boolean],
  (args) => args.length === 0,

  [Array, () => Boolean],
  (array) => array.length === 0,

  [Buffer, () => Boolean],
  (buffer) => buffer.length === 0,

  [String, () => Boolean],
  (string) => string.length === 0,

  [TypedArray, () => Boolean],
  (typedArray) => typedArray.length === 0,

  [Map, () => Boolean],
  (map) => map.size === 0,

  [Set, () => Boolean],
  (set) => set.size === 0,

  [ImmutableMap, () => Boolean],
  (immutableMap) => immutableMap.size === 0,

  [ImmutableList, () => Boolean],
  (immutableList) => immutableList.size === 0,

  [Prototype, () => Boolean],
  (proto) => objectKeys(proto).length === 0,

  [Object, () => Boolean],
  (object) => {
    for (const key in object) {
      if (objectHasOwnProperty(object, key)) {
        return false
      }
    }
  }
)

export default isEmpty
