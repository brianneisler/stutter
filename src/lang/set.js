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
import setProperty from './setProperty'

const set = defn(
  'lang.set',
  {
    description:
      'Makes a shallow clone of an object, setting or overriding the specified property with the given value. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.',
    since: 'v0.2.0'
  },
  {
    definitions: [
      [Path, Any, Any, () => Any],
      (path, any, value) =>
        anySetPathWith(any, path, value, contagion, get, set),

      [Any, Path, Any, () => Any],
      (any, path, value) =>
        anySetPathWith(any, path, value, contagion, get, set),

      [Index, Any, Indexed, () => Indexed],
      (index, value, indexed) => setIndex(indexed, index, value),

      [Indexed, Index, Any, () => Indexed],
      (indexed, index, value) => setIndex(indexed, index, value),

      [Key, Any, Keyed, () => Keyed],
      (key, value, keyed) => setKey(keyed, key, value),

      [Keyed, Key, Any, () => Keyed],
      setKey,

      [Property, Any, Propertied, () => Propertied],
      (property, value, propertied) => setProperty(propertied, property, value),

      [Propertied, Property, Any, () => Propertied],
      setProperty
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
