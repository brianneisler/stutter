import SYMBOL_ITERATOR from '../constants/SYMBOL_ITERATOR'
import anyIsArray from './anyIsArray'
import anyIsFunction from './anyIsFunction'
import functionTypify from './functionTypify'

/**
 * Convert param type and function definitions into parameterized functions
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Array<(Array<Type> | Function)>} definitions
 * @return {Array<Function>} A new Array of Functions with the given parameter
 * Types attached.
 * @example
 *
 * definitionsToParameterizedFunctions([
 *   [Any, String], (foo, bar) => {},
 *   [Number, String], (baz, bop) => {},
 * ])
 * //=> [
 * //   Function {
 * //     paramters: [
 * //       { name: 'foo', type: Any },
 * //       { name: 'bar', type: String },
 * //     ],
 * //     length: 2
 * //   },
 * //   Function {
 * //     paramters: [
 * //       { name: 'baz', type: Number },
 * //       { name: 'bop', type: String },
 * //     ],
 * //     length: 2
 * //   }
 * // ]
 */
const definitionsToParameterizedFunctions = (definitions) => {
  if (!anyIsArray(definitions) || definitions.length === 0) {
    throw new TypeError(
      'definitionsToParameterizedFunctions method expects an Array containing at least one function'
    )
  }
  const iter = definitions[SYMBOL_ITERATOR]()

  const funcs = []
  let next = iter.next()
  let func
  let paramTypes
  while (!next.done) {
    func = null
    paramTypes = null
    if (anyIsArray(next.value)) {
      paramTypes = next.value
      next = iter.next()
      if (next.done) {
        throw new Error(
          'definitionsToParameterizedFunctions method expects a function after a paramter type declaration.'
        )
      }
    }
    if (anyIsFunction(next.value)) {
      func = next.value
    } else {
      throw new Error(
        `definitionsToParameterizedFunctions method expected a Function in the Array. Instead found ${
          next.value
        }`
      )
    }
    funcs.push(functionTypify(func, paramTypes))
    next = iter.next()
  }
  return funcs
}

export default definitionsToParameterizedFunctions
