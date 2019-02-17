import definitionsToParameterizedFunctions from './definitionsToParameterizedFunctions'
import functionCurry from './functionCurry'
import functionHandleExceptions from './functionHandleExceptions'
import functionResolve from './functionResolve'
import functionsToMultiFunction from './functionsToMultiFunction'

/**
 * Converts a definitions Array into an `Fn` function.
 *
 * An `Fn` function is a function with a few predefined behaviours. These
 * functions will...
 * - [curry](#curry)
 * - [validate args](validate)
 * - [resolve all args](#allWith)
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Array<(Array<Type> | Function)>} definitions An Array of one or more function or
 * parameter type definitions
 * @returns {Function} The new `Fn` function
 * @example
 *
 *
 */
const definitionsToFn = (definitions) => {
  const funcs = definitionsToParameterizedFunctions(definitions)
  if (funcs.length === 0) {
    throw new Error('fn method expects at least one function')
  }
  let func
  if (funcs.length > 1) {
    func = functionsToMultiFunction(funcs)
  } else {
    func = funcs[0]
  }
  return functionCurry(func, (targetFunc) => functionHandleExceptions(functionResolve(targetFunc)))
}

export default definitionsToFn
