import anyIsException from './anyIsException'
import functionCatchWith from './functionCatchWith'

/**
 * Wrap the given function with another function that will handle the Exceptions
 * that occur.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to wrap.
 * @return {Function} The new function wrapped with error handling.
 * @example
 *
 */
const functionHandleExceptions = (func) =>
  functionCatchWith(func, (thrown) => {
    if (anyIsException(thrown)) {
      throw thrown.toError()
    }
    throw thrown
  })

export default functionHandleExceptions
