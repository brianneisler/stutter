import anyIsArray from './anyIsArray'
import dispatcherToMultiFn from './dispatcherToMultiFn'
import fnsToMultiFnDispatcher from './fnsToMultiFnDispatcher'

/**
 * Group multiple functions into a single function.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Array<Fn>} fns The group of `Fns` to make a multi `Fn.
 * @param {{ multi: boolean, partial: boolean }} options The options for this multi Fn
 * @return {Fn} A new multi Fn that dispatches to all of the given Fns
 * @example
 *
 */
const fnsToMultiFn = (fns, options) => {
  if (!anyIsArray(fns)) {
    throw new TypeError(
      `fnsToMultiFn expected 'fns' parameter to be an Array. Instead was given ${fns}`
    )
  }
  return dispatcherToMultiFn(fnsToMultiFnDispatcher(fns), options)
}

export default fnsToMultiFn
