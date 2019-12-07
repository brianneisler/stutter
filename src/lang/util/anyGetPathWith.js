import anyIsNil from './anyIsNil'
import anyIterate from './anyIterate'

const anyGetPathWith = (any, path, func) => {
  if (path.size === 0) {
    return any
  }
  let value = any
  return anyIterate(path, (next) => {
    if (next.done) {
      return {
        ...next,
        value
      }
    }
    value = func(next.value, value)
    if (anyIsNil(value)) {
      return {
        ...next,
        done: true,
        value
      }
    }
    return next
  })
}

export default anyGetPathWith
