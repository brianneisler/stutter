import anyIsArguments from './anyIsArguments'
import anyToArray from './anyToArray'
import arrayToArguments from './arrayToArguments'

/**
 * Converts `any` to an `Arguments`.
 *
 * @private
 * @function
 * @since 0.0.21
 * @category lang.util
 * @param {*} any The value to convert.
 * @returns {Arguments} Returns the converted arguments.
 * @example
 *
 * anyToArguments({ 'a': 1, 'b': 2 })
 * // => Arguments [1, 2]
 *
 * anyToArguments('abc')
 * // => Arguments ['a', 'b', 'c']
 *
 * anyToArguments(1)
 * // => Arguments [1]
 *
 * anyToArguments(null)
 * // => []
 */
const anyToArguments = (any) => {
  if (anyIsArguments(any)) {
    return any
  }
  const array = anyToArray(any)
  return arrayToArguments(array)
}

export default anyToArguments
