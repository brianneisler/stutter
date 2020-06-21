import ImmutableList from '../classes/ImmutableList'
import anyIsImmutableList from './anyIsImmutableList'
import buildException from './buildException'
import buildMultiFn from './buildMultiFn'
import fnsToDispatcher from './fnsToDispatcher'

/**
 * Group multiple functions into a single function.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Array<Fn>} fns The group of `Fns` to make a multi `Fn.
 * @param {Object} meta Meta values for this multi Fn
 * @return {Fn} A new multi Fn that dispatches to all of the given Fns
 * @example
 *
 */
const fnsToMultiFn = (fns, meta = {}) => {
  if (!anyIsImmutableList(fns)) {
    throw buildException(fnsToMultiFn)
      .expected.arg(fns, 0)
      .toBeInstanceOf(ImmutableList)
  }
  return buildMultiFn(fnsToDispatcher(fns), meta)
}

export default fnsToMultiFn
