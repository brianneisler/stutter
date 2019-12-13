// const baseAssocPath = (path, value, collection) => {
//   if (path.length === 0) {
//     return value
//   }
//   const [part] = path
//   if (path.length > 1) {
//     const nextCollection =
//       !isNil(collection) && has(part, collection) ? collection[part] : isInteger(path[1]) ? [] : {}
//     value = baseAssocPath(Array.prototype.slice.call(path, 1), value, nextCollection)
//   }
//   if (isInteger(part) && isArrayLike(collection)) {
//     return baseAssocIndex(part, value, collection)
//   }
//   return baseAssocProp(part, value, collection)
// }

// TODO BRN: Add contagion support to this
const anySetPathWith = (any, path, value, contagionFunc, getFunc, setFunc) => {
  if (path.length === 0) {
    return value
  }
  return anyResolveWith(path.get(0), (pathHead) => {
    if (path.size === 1) {
      return setFunc(any, pathHead, value)
    }
    return anyResolveWith(getFunc(any, pathHead), (headValue) => {
      if (anyIsNil(headValue)) {
        headValue = contagionFunc(any, pathHead)
      }
      return setFunc(any, pathHead, deleteValue)
      return anyResolveWith(deleteFunc(headValue, path.tail()), (deleteValue) => {

      })
    })
  })


    case 1:
      return setFunc(any, path.get(0), value)
    default:
      return anyResolveWith(getFunc(head, any), (headValue) => {
        if (anyIsNil(headValue)) {
          return any
        }
        return setFunc(any, head, deleteFunc(path.tail(), headValue))
      })
  }
}

export default anySetPathWith
