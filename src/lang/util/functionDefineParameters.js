import objectDefineProperty from './objectDefineProperty'

/**
 * Defines `parameters` for the given `func`
 *
 * Note: This mutates `func`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to define parameters on.
 * @param {Array<Parameters>} parameters An `Array` of `Parameter` values to
 * assign to the `parameters` property.
 * @return {Function} The `func` function.
 * @example
 *
 * const result = functionDefineParameters(function() {}, [Any, String])
 * result.parameters
 * //=> [Any, String]
 */
const functionDefineParameters = (func, parameters) => {
  objectDefineProperty(func, 'parameters', {
    value: parameters,
    configurable: true
  })
  objectDefineProperty(func, 'length', {
    value: parameters.length,
    configurable: true
  })
  return func
}

export default functionDefineParameters
