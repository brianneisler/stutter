import anyIsNil from './anyIsNil'
import anyResolveWith from './anyResolveWith'

const anySetPathWith = (any, path, value, contagionFunc, getFunc, setFunc) => {
  if (path.size === 0) {
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
      return anyResolveWith(
        anySetPathWith(headValue, path.tail(), contagionFunc, getFunc, setFunc),
        (setValue) => {
          return setFunc(any, pathHead, setValue)
        }
      )
    })
  })
}

export default anySetPathWith
