import Any from './types/Any'
import Object from './types/Object'
import Property from './types/Property'
import defn from './defn'
import objectGetProperty from './util/objectGetProperty'

/**
 * @since v0.1.0
 * @param {Array|String|Number|Function} path The path to use.
 * @param {Object} value The value to retrieve the nested property from.
 * @returns {*} The data at `path`.
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
  'lang.getProperty',
  'Retrieve the value at a given Property',

  [Property, Object, () => Any],
  (property, object) => objectGetProperty(object, property),

  [Object, Property, () => Any],
  (object, property) => objectGetProperty(object, property)
)

export default get
