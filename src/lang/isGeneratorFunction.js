import Any from './types/Any'
import Boolean from './types/Boolean'
import GeneratorFunction from './types/GeneratorFunction'
import defn from './defn'
import is from './is'

/**
 * @since v0.1.0
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
const isGeneratorFunction = defn(
  'lang.isGeneratorFunction',
  'Checks if `Any` is classified as a `GeneratorFunction`.',

  [Any, () => Boolean],
  is(GeneratorFunction)
)

export default isGeneratorFunction
