import Fn from './js/Fn'

/**
 * Sets `parameters` for the given `fn`
 *
 * Note: This method is immutable. A new copy of Fn will be returned
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Fn} fn The Fn to set parameters on.
 * @param {Array<Parameters>} parameters An `Array` of `Parameter` values to
 * set to the `parameters` property.
 * @return {Fn} A new Fn
 * @example
 *
 * const result = fnSetParameters(new Fn(() => {}), [Any, String])
 * result.parameters
 * //=> [Any, String]
 */
const fnSetParameters = (fn, parameters) => {
  return new Fn(fn.func, {
    ...fn.meta,
    parameters
  })
}

export default fnSetParameters
