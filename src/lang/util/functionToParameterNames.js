import functionGetParameterNames from './functionGetParameterNames'

/**
 * Returns an `Array` of `Parameter` names for the given `Function`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to convert to an `Array` of `Parameter`s
 * @returns {Array} An `Array` of the `Function`'s `Parameter` names
 */
const functionToParameterNames = (func) => {
  if (func.parameters) {
    return func.parameters.map((parameter) => parameter.name)
  }
  return functionGetParameterNames(func)
}

export default functionToParameterNames
