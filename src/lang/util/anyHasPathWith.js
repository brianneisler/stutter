import anyResolveWith from './anyResolveWith'
import pathIterate from './pathIterate'

const anyHasPathWith = (any, path, getFunc, hasFunc) => {
  if (path.size === 0) {
    return true
  }
  let value = any
  return pathIterate(path, (next) =>
    anyResolveWith(next.value, (pathValue) => {
      if (next.done) {
        return {
          ...next,
          value: true
        }
      }
      if (hasFunc(value, pathValue)) {
        return anyResolveWith(getFunc(value, pathValue), (resolvedValue) => {
          value = resolvedValue
          return next
        })
      }
      return {
        ...next,
        done: true,
        value: false
      }
    })
  )
}

export default anyHasPathWith
