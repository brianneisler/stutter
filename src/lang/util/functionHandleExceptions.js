import anyIsException from './anyIsException'
import functionCopyMeta from './functionCopyMeta'

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
const functionHandleExceptions = (func) => {
  const override = function() {
    try {
      return func.apply(this, arguments)
    } catch (thrown) {
      if (anyIsException(thrown)) {
        throw thrown.toError()
      }
      throw thrown
    }
  }
  return functionCopyMeta(override, func)
}

export default functionHandleExceptions
