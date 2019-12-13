import anyIsNil from './anyIsNil'
import anyResolveWith from './anyResolveWith'
import pathIterate from './pathIterate'

const anyGetPathWith = (any, path, getFunc) => {
  if (path.size === 0) {
    return any
  }
  let value = any
  return pathIterate(path, (next) =>
    anyResolveWith(next.value, (pathValue) => {
      if (next.done) {
        return {
          ...next,
          value
        }
      }
      return anyResolveWith(value, (resolvedValue) => {
        if (anyIsNil(resolvedValue)) {
          return {
            ...next,
            done: true,
            value: undefined
          }
        }

        value = getFunc(resolvedValue, pathValue)
        return next
      })
    })
  )
}

export default anyGetPathWith
