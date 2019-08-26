import anyIsGenerator from './anyIsGenerator'
import anyIsPromise from './anyIsPromise'

const generatorCatchWith = function*(generator, handler) {
  try {
    return yield* generator
  } catch (thrown) {
    return handler(thrown)
  }
}

const promiseCatchWith = (promise, handler) => promise.catch(handler)

/**
 * Wraps a function in a try catch block that catches errors thrown
 * - synchronously
 * - asynchronously
 * - through generators
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to wrap.
 * @param {Function} handler The error handler.
 * @returns {Function} A new function wrapping `func` with the try catch
 * @example
 *
 * // synchronous error
 * const throwsError = () => {
 *   throw new Error()
 * }
 * const wrappedFunc = functionCatchWith(throwsError, (error) => {})
 *
 * // asynchronous error
 * const throwsError = async () => {
 *   throw new Error()
 * }
 * const wrappedAsyncFunc = functionCatchWith(throwsError, (error) => {})
 *
 * // generator error
 * const throwsError = function*() {
 *   throw new Error()
 * }
 * const wrappedGeneratorFunc = functionCatchWith(throwsError, (error) => {})
 */
const functionCatchWith = (func, handler) => {
  return function() {
    try {
      const result = func.apply(this, arguments)
      if (anyIsPromise(result)) {
        return promiseCatchWith(result, handler)
      }
      if (anyIsGenerator(result)) {
        return generatorCatchWith(result, handler)
      }
      return result
    } catch (thrown) {
      return handler(thrown)
    }
  }
}

export default functionCatchWith
