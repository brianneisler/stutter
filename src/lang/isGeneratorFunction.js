import { anyIsGeneratorFunction } from './util'
import defn from './defn'

/**
 * Checks whether `any1 is GeneratorFunction.
 *
 * @function
 * @since v0.1.0
 * @category lang
 * @param  {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a GeneratorFunction, else `false`.
 * @example
 *
 * isGeneratorFunction(function*() {})
 * //=> true
 *
 * isGeneratorFunction(function() {})
 * //=> false
 */
const isGeneratorFunction = defn('isGeneratorFunction', anyIsGeneratorFunction)

export default isGeneratorFunction
