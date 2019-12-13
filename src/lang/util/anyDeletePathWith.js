import anyIsNil from './anyIsNil'
import anyResolveWith from './anyResolveWith'

const anyDeletePathWith = (any, path, getFunc, hasFunc, setFunc, deleteFunc) => {
  if (path.size === 0) {
    return undefined
  }
  return anyResolveWith(path.get(0), (head) => {
    if (path.size === 1) {
      return deleteFunc(any, head)
    }
    if (!hasFunc(any, head)) {
      return any
    }
    return anyResolveWith(getFunc(any, head), (headValue) => {
      if (anyIsNil(headValue)) {
        // NOTE BRN: We do this last set in case the head value needed to be resolved
        return setFunc(any, head, headValue)
      }
      return anyResolveWith(deleteFunc(headValue, path.tail()), (deleteValue) => {
        return setFunc(any, head, deleteValue)
      })
    })
  })
}

export default anyDeletePathWith
