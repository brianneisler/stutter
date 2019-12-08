import anyIterate from './anyIterate'

const anyHasPathWith = (any, path, getFunc, hasFunc) => {
  if (path.size === 0) {
    return true
  }
  let value = any
  return anyIterate(path, (next) => {
    if (next.done) {
      return {
        ...next,
        value: true
      }
    }
    if (hasFunc(next.value, value)) {
      value = getFunc(next.value, value)
    } else {
      return {
        ...next,
        done: true,
        value: false
      }
    }
    return next
  })
}

export default anyHasPathWith
