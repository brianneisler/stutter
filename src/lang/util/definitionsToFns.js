import { ITERATOR } from '../constants/Symbol'
import ImmutableList from './js/ImmutableList'
import anyIsArray from './anyIsArray'
import anyIsFn from './anyIsFn'
import anyIsFunction from './anyIsFunction'
import definitionToFn from './definitionToFn'
import fnCastWithDefinition from './fnCastWithDefinition'

/**
 * Convert param type and function definitions into parameterized functions
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Array<(Array<Type> | Function)>} definitions
 * @return {ImmutableList<Fn>} A new `ImmutableList` of Fns with the given definitions attached.
 * @example
 *
 * definitionsToFns([
 *   [Any, String], (foo, bar) => {},
 *   [Number, String], (baz, bop) => {},
 * ])
 * //=> ImmutableList [
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
    throw new TypeError(
      'definitionsToFns method expects an Array containing at least one function'
    )
  }
  const iter = definitions[ITERATOR]()
  let fns = ImmutableList([])
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
      let fn = next.value
      if (definition) {
        fn = fnCastWithDefinition(fn, definition)
      }
      fns = fns.push(fn)
    } else if (anyIsFunction(next.value)) {
      func = next.value
      fns = fns.push(definitionToFn(func, definition))
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
