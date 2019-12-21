import argumentsToArray from './argumentsToArray'
import arrayDeleteIndex from './arrayDeleteIndex'
import arrayToArguments from './arrayToArguments'

/**
 * Deletes an Index from an Array. Returns a new copy of the Array with the Index
 * removed.
 *
 * @private
 * @function
 * @immutable
 * @pure
 * @param {Array} array
 * @param {Index} index
 * @returns {Array}
 */
const argumentsDeleteIndex = (args, index) => {
  if (index >= args.length) {
    return args
  }
  return arrayToArguments(arrayDeleteIndex(argumentsToArray(args), index))
}

export default argumentsDeleteIndex
