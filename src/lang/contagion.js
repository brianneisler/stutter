// required
import Array from './types/Array'
import ImmutableList from './types/ImmutableList'
import ImmutableMap from './types/ImmutableMap'
import Index from './types/IndexType'
import Key from './types/Key'
import Map from './types/Map'
import Object from './types/Object'
import PlainObject from './types/PlainObject'
import Property from './types/Property'
import _ImmutableList from './util/js/ImmutableList'
import _ImmutableMap from './util/js/ImmutableMap'
import _Map from './util/js/Map'
import defn from './defn'

// TODO BRN: Figure out how to turn this into a protocol (implementation will be
// similar to type conversion)
const contagion = defn(
  'lang.contagion',
  {
    description:
      'Generates a new instance based on the given instance type and a "sample" type. The combination of the instance type and sample type will determine the new type of instance to return. This is primarily used by deep operations such as set and update where the new type ',
    since: 'v0.2.0'
  },

  [Array, Index, () => Array],
  // eslint-disable-next-line no-unused-vars
  (array, sample) => [],

  [Array, Property, () => PlainObject],
  // eslint-disable-next-line no-unused-vars
  (array, sample) => ({}),

  [Array, Key, () => Map],
  // eslint-disable-next-line no-unused-vars
  (array, sample) => new Map(),

  [Array, () => Array],
  // eslint-disable-next-line no-unused-vars
  (array) => [],

  [ImmutableList, Index, () => ImmutableList],
  // eslint-disable-next-line no-unused-vars
  (immutableList, sample) => new _ImmutableList(),

  [ImmutableList, Key, () => ImmutableMap],
  // eslint-disable-next-line no-unused-vars
  (immutableList, sample) => new _ImmutableMap(),

  [ImmutableList, Property, () => PlainObject],
  // eslint-disable-next-line no-unused-vars
  (immutableList, sample) => ({}),

  [ImmutableList, () => ImmutableList],
  // eslint-disable-next-line no-unused-vars
  (immutableList) => new _ImmutableList(),

  [ImmutableMap, Index, () => ImmutableList],
  // eslint-disable-next-line no-unused-vars
  (immutableMap, sample) => new _ImmutableList(),

  [ImmutableMap, Key, () => ImmutableMap],
  // eslint-disable-next-line no-unused-vars
  (immutableMap, sample) => new _ImmutableMap(),

  [ImmutableMap, Property, () => PlainObject],
  // eslint-disable-next-line no-unused-vars
  (immutableMap, sample) => ({}),

  [ImmutableMap, () => ImmutableMap],
  // eslint-disable-next-line no-unused-vars
  (immutableMap) => new _ImmutableMap(),

  [Map, Index, () => Array],
  // eslint-disable-next-line no-unused-vars
  (map, sample) => [],

  [Map, Property, () => PlainObject],
  // eslint-disable-next-line no-unused-vars
  (map, sample) => ({}),

  [Map, Key, () => Map],
  // eslint-disable-next-line no-unused-vars
  (map, sample) => new _Map(),

  [Map, () => Map],
  // eslint-disable-next-line no-unused-vars
  (map) => new _Map(),

  [(Object, Index, () => Array)],
  // eslint-disable-next-line no-unused-vars
  (object, sample) => [],

  [(Object, Property, () => PlainObject)],
  // eslint-disable-next-line no-unused-vars
  (object, sample) => ({}),

  [(Object, Key, () => Map)],
  // eslint-disable-next-line no-unused-vars
  (object, sample) => new _Map(),

  [(Object, () => PlainObject)],
  // eslint-disable-next-line no-unused-vars
  (object) => ({})
)

export default contagion
