import externalPromise from './externalPromise'
import anyResolveToGenerator from './util/anyResolveToGenerator'

const doResolve = function* (value, promise) {
  try {
    const result = yield* anyResolveToGenerator(value)
    promise.resolve(result)
    return result
  } catch (error) {
    promise.reject(error)
  }
}

const resolveToResolver = (value) => {
  const promise = externalPromise()
  const resolver = doResolve(value, promise)
  resolver.promise = promise
  return resolver
}

export default resolveToResolver
