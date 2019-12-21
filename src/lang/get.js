import Any from './types/Any'
import Function from './types/Function'
import Index from './types/IndexType'
import Indexed from './protocols/Indexed'
import Key from './types/Key'
import Keyed from './protocols/Keyed'
import Path from './types/Path'
import Propertied from './protocols/Propertied'
import Property from './types/Property'
import anyGetPathWith from './util/anyGetPathWith'
import defn from './defn'
import getIndex from './getIndex'
import getKey from './getKey'
import getProperty from './getProperty'

/**
 * @since v0.1.0
 * @param {Any} any The selector to use.
 * @param {Indexed|Keyed|Propertied} value The value to retrieve the selector from.
 * @returns {*} The data at `selector`.
 * @example
 *
 * get(path(['a', 'b']), {a: {b: 2}})
 * //=> 2
 *
 * get(path(['a', 'b']), {c: {b: 2}})
 * //=> undefined
 *
 * get('a', {a: {b: 2}})
 * //=> { b: 2 }
 *
 * get(path('a.b'), {a: {b: 2}})
 * //=> 2
 *
 * get(path('a[0]'), {a: [ 1, 2 ]})
 * //=> 1
 *
 * get(path('[0]'), [ 1, 2 ])
 * //=> 1
 */
const get = defn(
  'lang.get',
  'Retrieve the value at a given selector',

  [Path, Any, () => Any],
  (path, any) => anyGetPathWith(any, path, get),

  [Any, Path, () => Any],
  (any, path) => anyGetPathWith(any, path, get),

  [Index, Indexed, () => Any],
  (index, indexed) => getIndex(indexed, index),

  [Indexed, Index, () => Any],
  getIndex,

  [Key, Keyed, () => Any],
  (key, keyed) => getKey(keyed, key),

  [Keyed, Key, () => Any],
  getKey,

  [Property, Propertied, () => Any],
  (property, propertied) => getProperty(propertied, property),

  [Propertied, Property, () => Any],
  getProperty,

  [Function, Any, () => Any],
  (func, any) => func(any),

  [Any, Function, () => Any],
  (any, func) => func(any)
)

export default get
