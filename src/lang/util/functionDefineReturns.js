import objectDefineProperty from './objectDefineProperty'

/**
 * Defines the `returns` property for the given `func`. The `returns` property
 * is a single `Type` representing the type that will be returned by this function.
 *
 * Note: This mutates `func`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The function to define `returns` on.
 * @param {Type} returns A `Type` that is returned by `func`.
 * @return {Function} The `func` function.
 * @example
 *
 * const result = functionDefineReturns(function() {}, String)
 * result.returns
 * //=> String
 */
const functionDefineReturns = (func, returns) => {
  objectDefineProperty(func, 'returns', {
    value: returns,
    configurable: true
  })
  return func
}

export default functionDefineReturns
