import Any from './types/Any'
import Index from './types/IndexType'
import Indexed from './protocols/Indexed'
import Key from './types/Key'
import Keyed from './protocols/Keyed'
import Path from './types/Path'
import Propertied from './protocols/Propertied'
import Property from './types/Property'
import anySetPathWith from './util/anySetPathWith'
import contagion from './contagion'
import defn from './defn'
import get from './get'
import setIndex from './setIndex'
import setKey from './setKey'
import setProp from './setProp'

import objectSetProperty from './util/objectSetProperty'

// const baseSet = (selector, value, collection) => {
//   if (
//     collection != null &&
//     isFunction(collection.set) &&
//     !isMap(collection) &&
//     !isWeakMap(collection)
//   ) {
//     return collection.set(selector, value)
//   }
//   return baseAssoc(selector, value, collection)
// }

// const set = curry((selector, value, collection) =>
//   allWith(
//     ([resolvedSelector, resolvedCollection]) =>
//       baseSet(resolvedSelector, value, resolvedCollection),
//     [selector, collection]
//   )
// )

/**
 * Makes a shallow clone of an object, setting or overriding the specified property with the given value. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.
 * @function
 * @since v0.1.0
 * @category data
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {Array | String | Function} selector The property path to set or functional selector
 * @param {*} value The new value
 * @param {*} collection The collection to clone and assign the new value
 * @returns {*} A new collection equivalent to the original except for the changed selector path.
 * @example
 *
 * set('c', 3, {a: 1, b: 2})          //=> {a: 1, b: 2, c: 3}
 * set('c.d', 3, {a: 1, b: 2})        //=> {a: 1, b: 2, c: { d: 3 }}
 * set([ 'c', 'd' ], 3, {a: 1, b: 2}) //=> {a: 1, b: 2, c: { d: 3 }}
 */
const set = defn(
  'lang.set',
  'Makes a shallow clone of an object, setting or overriding the specified property with the given value. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.',
  {
    definitions: [
      [Path, Any, Any, () => Any],
      (path, any, value) => anySetPathWith(any, path, value, contagion, get, set),

      [Any, Path, Any, () => Any],
      (any, path, value) => anySetPathWith(any, path, value, contagion, get, set),

      [Index, Any, Indexed, () => Indexed],
      (index, value, indexed) => setIndex(indexed, index, value),

      [Indexed, Index, Any, () => Indexed],
      setIndex,

      [Key, Any, Map, () => Map],
      (key, value, map) => mapSetKey(map, key, value),

      [Map, Key, Any, () => Map],
      (map, key, value) => mapSetKey(map, key, value),

      [Key, Any, ImmutableMap, () => ImmutableMap],
      (key, value, immutableMap) => immutableMap.set(key, value),

      [ImmutableMap, Key, Any, () => ImmutableMap],
      (immutableMap, key, value) => immutableMap.set(key, value),

      [Property, Any, Object, () => Object],
      (property, value, object) => objectSetProperty(object, property, value),

      [Object, Property, Any, () => Object],
      (object, property, value) => objectSetProperty(object, property, value)
    ]
    // // TODO BRN: We may not want to resolve the value that is being set. This
    // would enable users to build lists of promises for use with Promise.all.
    // To do this we would need to add custom resolvers for each implementation
    // in the above Fn definitions.
    // options: {
    //   curry: true,
    //   handleExceptions: true,
    //   resolve: false
    // }
  }
)

export default set
