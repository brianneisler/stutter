import anyIsNil from './anyIsNil'
import anyIsObject from './anyIsObject'
import anyResolveWith from './anyResolveWith'

const anySetPathWith = (any, path, value, contagionFunc, getFunc, setFunc) => {
  if (path.size === 0) {
    return value
  }
  const pathHead = path.get(0)
  if (path.size === 1) {
    return setFunc(any, pathHead, value)
  }
  return anyResolveWith(getFunc(any, pathHead), (headValue) => {
    const pathTail = path.tail()
    if (anyIsNil(headValue) || !anyIsObject(headValue)) {
      headValue = contagionFunc(any, path.get(1))
    }
    return anyResolveWith(
      anySetPathWith(headValue, pathTail, value, contagionFunc, getFunc, setFunc),
      (setValue) => {
        return setFunc(any, pathHead, setValue)
      }
    )
  })
}

export default anySetPathWith
