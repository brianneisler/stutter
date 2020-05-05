import anyIsFunction from './anyIsFunction'
import buildFn from './buildFn'
import definitionToParametersAndReturns from './definitionToParametersAndReturns'
import functionGetParameterNames from './functionGetParameterNames'

/**
 * Builds an `Fn` using the given function and `definition`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} func The func to wrap in an `Fn`.
 * @param {Array} definition The defintion of parameters for this `Fn`
 * @returns {Function} A function with a Symbol('@@fn') pointing to the new `Fn` instance
 * @example
 *
 * const arrayWrap = definitionToFn(
 *   (foo) => [ foo ],
 *   [Any, () => Array]
 * )
 *
 * arrayWrap('foo')
 * // => [ 'foo' ]
 *
 * arrayWrap[SYMBOL_FN]
 * // => Fn {
 * //   func: (foo) => [ foo ],
 * //   meta: {
 * //     parameters: [
 * //       Parameter {
 * //         name: 'foo',
 * //         type: Any
 * //       }
 * //     ],
 * //     returns: Array
 * //   }
 * // }
 *
 * arrayWrap.length
 * // => 1
 */
const definitionToFn = (func, definition = [], meta = {}) => {
  if (!anyIsFunction(func)) {
    throw new TypeError('Expected `func` to be a Function')
  }

  const parameterNames = functionGetParameterNames(func)
  const { parameters, returns } = definitionToParametersAndReturns(
    definition,
    parameterNames
  )
  return buildFn(func, {
    ...meta,
    parameters,
    returns
  })
}

export default definitionToFn
