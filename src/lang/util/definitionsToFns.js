import SYMBOL_ITERATOR from '../constants/SYMBOL_ITERATOR'
import anyIsArray from './anyIsArray'
import anyIsFn from './anyIsFn'
import anyIsFunction from './anyIsFunction'
import definitionToFn from './definitionToFn'

/**
 * Convert param type and function definitions into parameterized functions
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Array<(Array<Type> | Function)>} definitions
 * @return {Array<Fn>} A new Array of Fns with the given definitions attached.
 * @example
 *
 * definitionsToFns([
 *   [Any, String], (foo, bar) => {},
 *   [Number, String], (baz, bop) => {},
 * ])
 * //=> [
 * //   Fn {
 * //     paramters: [
 * //       { name: 'foo', type: Any },
 * //       { name: 'bar', type: String },
 * //     ],
 * //     returns: Any
 * //   },
 * //   Fn {
 * //     paramters: [
 * //       { name: 'baz', type: Number },
 * //       { name: 'bop', type: String },
 * //     ],
 * //     returns: Any
 * //   }
 * // ]
 */
const definitionsToFns = (definitions) => {
  if (!anyIsArray(definitions) || definitions.length === 0) {
    throw new TypeError('definitionsToFns method expects an Array containing at least one function')
  }
  const iter = definitions[SYMBOL_ITERATOR]()
  const fns = []
  let next = iter.next()
  let func
  let definition
  while (!next.done) {
    func = undefined
    definition = undefined
    if (anyIsArray(next.value)) {
      definition = next.value
      next = iter.next()
      if (next.done) {
        throw new Error(
          'definitionsToFns method expects a function after a parameter type declaration.'
        )
      }
    }
    if (anyIsFn(next.value)) {
      if (definition) {
        throw new Error(`Cannot redefine an already defined Fn with new parameter types`)
      }
      fns.push(next.value)
    } else if (anyIsFunction(next.value)) {
      func = next.value
      fns.push(definitionToFn(func, definition))
    } else {
      throw new Error(
        `definitionsToFns method expected a Function in the Array. Instead found ${next.value}`
      )
    }
    next = iter.next()
  }
  return fns
}

export default definitionsToFns
