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

const contagion = defn(
  'lang.contagion',
  {
    description: '',
    since: 'v0.2.0'
  },

  [Array, Index, () => Array],
  // eslint-disable-next-line no-unused-vars
  (array, index) => [],

  [Array, Property, () => PlainObject],
  // eslint-disable-next-line no-unused-vars
  (array, property) => ({}),

  [Array, Key, () => Map],
  // eslint-disable-next-line no-unused-vars
  (array, key) => new Map(),

  [Array, () => Array],
  // eslint-disable-next-line no-unused-vars
  (array) => [],

  [ImmutableList, Index, () => ImmutableList],
  // eslint-disable-next-line no-unused-vars
  (immutableList, index) => new _ImmutableList([]),

  [ImmutableList, Key, () => ImmutableMap],
  // eslint-disable-next-line no-unused-vars
  (immutableList, key) => new _ImmutableMap(),

  [ImmutableList, () => ImmutableList],
  // eslint-disable-next-line no-unused-vars
  (immutableList) => new _ImmutableList([]),

  [ImmutableMap, Index, () => ImmutableList],
  // eslint-disable-next-line no-unused-vars
  (immutableMap, index) => new _ImmutableList([]),

  [ImmutableMap, () => ImmutableMap],
  // eslint-disable-next-line no-unused-vars
  (immutableMap) => new _ImmutableMap(),

  [Map, Index, () => Array],
  // eslint-disable-next-line no-unused-vars
  (map, index) => [],

  [Map, Key, () => Map],
  // eslint-disable-next-line no-unused-vars
  (map, key) => new _Map(),

  [Map, () => Map],
  // eslint-disable-next-line no-unused-vars
  (map) => new _Map(),

  [(Object, Index, () => Array)],
  // eslint-disable-next-line no-unused-vars
  (object, index) => [],

  [(Object, Property, () => PlainObject)],
  // eslint-disable-next-line no-unused-vars
  (object, property) => ({}),

  [(Object, () => PlainObject)],
  // eslint-disable-next-line no-unused-vars
  (object) => ({})
)

export default contagion
