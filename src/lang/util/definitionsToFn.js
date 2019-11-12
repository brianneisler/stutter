import definitionsToFns from './definitionsToFns'
import fnsToMultiFn from './fnsToMultiFn'

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
  const fns = definitionsToFns(definitions)
  if (fns.length === 0) {
    throw new Error('fn method expects at least one function')
  }
  let fn
  if (fns.length > 1) {
    fn = fnsToMultiFn(fns)
  } else {
    fn = fns[0]
  }

  return fn.update({
    curry: true,
    handleExceptions: true,
    resolve: true
  })
}

export default definitionsToFn
