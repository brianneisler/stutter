const getArguments = function() {
  return arguments
}

/**
 * Converts an `Array` to `Arguments`.
 *
 * @private
 * @function
 * @since 0.0.21
 * @category lang.util
 * @param {Array} array The Array to convert.
 * @returns {Arguments} Returns the converted Arguments.
 * @example
 *
 * arrayToArguments([1, 2])
 * //=> Arguments [1, 2]
 */
const arrayToArguments = (array) => getArguments.apply(null, array)

export default arrayToArguments
