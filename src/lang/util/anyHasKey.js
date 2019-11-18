import anyIsFunction from './anyIsFunction'

const anyHasKey = (any, key) => {
  if (any && anyIsFunction(any.has)) {
    return any.has(key)
  }
  return false
}

export default anyHasKey
