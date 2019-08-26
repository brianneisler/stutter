import anyIsArray from './anyIsArray'
import dispatcherToMultiFunction from './dispatcherToMultiFunction'
import functionsToMultiFunctionDispatcher from './functionsToMultiFunctionDispatcher'

/**
 * Group multiple functions into a single function.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Array<Function>} funcs The group of functions to make a multi function.
 * @param {{ multi: boolean, partial: boolean }} options The options for this multi function
 * @return {Function} The function passed in `func` with parameters attached.
 * @example
 *
 */
const functionsToMultiFunction = (funcs, options) => {
  if (!anyIsArray(funcs)) {
    throw new TypeError(
      `functionsToMultiFunction expected 'funcs' parameter to be an Array. Instead was given ${funcs}`
    )
  }
  return dispatcherToMultiFunction(functionsToMultiFunctionDispatcher(funcs), options)
}

export default functionsToMultiFunction
