import anyIsNil from './anyIsNil'
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
    if (anyIsNil(headValue)) {
      headValue = contagionFunc(any, pathTail.head())
    }
    return anyResolveWith(
      anySetPathWith(headValue, pathTail, contagionFunc, getFunc, setFunc),
      (setValue) => {
        return setFunc(any, pathHead, setValue)
      }
    )
  })
}

export default anySetPathWith
