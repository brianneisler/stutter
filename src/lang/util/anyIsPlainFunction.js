import anyIsObject from './anyIsObject'
import anyToStringTag from './anyToStringTag'

/**
 * Checks if `any` is plain function. A plain function is not an AsyncFunction and not a GeneratorFunction
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a plain function, else `false`.
 * @example
 *
 * anyIsPlainFunction(() => {})
 * // => true
 *
 * anyIsPlainFunction(function() {})
 * // => true
 *
 * anyIsPlainFunction(async function() {})
 * // => false
 *
 * anyIsPlainFunction(function* () {})
 * // => false
 */
const anyIsPlainFunction = (any) => {
  if (!anyIsObject(any)) {
    return false
  }
  const tag = anyToStringTag(any)
  return tag == 'Function' || tag == 'Proxy'
}

export default anyIsPlainFunction
