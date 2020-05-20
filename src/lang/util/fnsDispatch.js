import { ErrorCode } from '../constants'
import ImmutableList from './js/ImmutableList'
import argumentsMatchToFnParameters from './argumentsMatchToFnParameters'
import buildException from './buildException'
import fnGetMeta from './fnGetMeta'

const getCallee = (context) =>
  context.callstack.peek() ? context.callstack.peek().callee : context.callee

/**
 * Dispatch to all the given `fns`
 *
 * @private
 * @function
 * @immutable
 * @pure
 * @since v0.2.0
 * @category lang.util
 * @param {ImmutableList<Fn>} fns
 * @param {Context} context
 * @param {Array<Any>} args
 * @param {Object} options
 * @return {ImmutableList<Match>|Match}
 * @example
 */
const fnsDispatch = (fns, context, args, options) => {
  const { size } = fns
  if (options.multi) {
    let matches = ImmutableList([])
    for (let idx = 0; idx < size; idx++) {
      const fn = fns.get(idx)
      const meta = fnGetMeta(fn)
      if (fn.dispatcher) {
        matches = matches.concat(fn.dispatch(context, args, options))
      } else if (meta.parameters) {
        const match = argumentsMatchToFnParameters(args, fn, options)
        if (match) {
          matches = matches.push(match)
        }
      } else {
        throw buildException(getCallee(context))
          .expected.fn(fn)
          .toHaveParametersOrDispatcher()
      }
    }
    return matches
  }

  for (let idx = 0; idx < size; idx++) {
    const fn = fns.get(idx)
    if (fn.dispatcher) {
      try {
        return fn.dispatch(context, args, options)
      } catch (error) {
        if (error.code !== ErrorCode.NO_MATCH) {
          throw error
        }
      }
    } else if (fn.parameters) {
      // TODO BRN: Instead of having to loop over and potentially check the
      // same types multiple times, we should generate a decision tree of type checks
      // to perform. The leaves of the tree are the results of the match. This
      // way each type involved only needs to be tested once.
      const match = argumentsMatchToFnParameters(args, fn, options)
      if (match) {
        return match
      }
    } else {
      throw buildException(getCallee(context))
        .expected.fn(fn)
        .toHaveParametersOrDispatcher()
    }
  }
  throw buildException(getCallee(context), {
    code: ErrorCode.NO_MATCH,
    stack: context.stack
  })
    .expected.arguments(args)
    .toMatchDispatcher(this)
}

export default fnsDispatch
