import anyFindType from './anyFindType'
import filterTypesForProtocol from './filterTypesForProtocol'
import root from './root'

// memoize this function? memoizing may be dangerous since it would cause a lot
// of values to be stored into memory that couldn't be purged using the WeakMap cache.
const anySatisfies = (any, protocol, namespaces = root.namespaces) => {
  const types = filterTypesForProtocol(protocol, namespaces)
  return anyFindType(any, types) !== null

  // TODO BRN: should we store known protocols on meta for value? This can only be done
  // for objects. Perhaps in our wrapping layer for fn we could wrap all given
  // values in an object that allows us to store meta data onto any value that
  // is passed into an `fn`. This would require wrapping and unwrapping when we
  // hand a value off on return

  // if (!anyIsObject(any)) {
  //   return false
  // }
  // const protocols = any[SYMBOL_PROTOCOLS]
  // return !!protocols && !!protocols[protocol]
  // let index = -1
  // const { keys } = this
  // let size = keys.length
  //
  // while (size--) {
  //   const key = keys[++index]
  //   if (!isFunction(value[key])) {
  //     return false
  //   }
  // }
  // return true
}

export default anySatisfies
