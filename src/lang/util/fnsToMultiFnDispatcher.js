import { ErrorCode } from '../constants'
import anyLog from './anyLog'
import argumentsMatchToFnParameters from './argumentsMatchToFnParameters'
import buildException from './buildException'
import fnGetMeta from './fnGetMeta'

const fnsToMultiFnDispatcher = (fns) => {
  return {
    dispatch: (context, args, options) => {
      // console.log('fnsToMultiFnDispatcher - dispatching args:', args)
      // anyLog(fns).push()
      const { length } = fns
      if (options.multi) {
        let matches = []
        for (let idx = 0; idx < length; idx++) {
          const fn = fns[idx]
          const meta = fnGetMeta(fn)
          if (fn.dispatcher) {
            matches = matches.concat(fn.dispatch(context, args, options))
          } else if (meta.parameters) {
            // anyLog(fn).push()
            const match = argumentsMatchToFnParameters(args, fn, options)
            if (match) {
              matches.push(match)
            }
          } else {
            throw buildException(context.callstack.peek().callee)
              .expected.fn(fn)
              .toHaveParametersOrDispatcher()
          }
        }
        return matches
      }

      for (let idx = 0; idx < length; idx++) {
        const fn = fns[idx]
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
          throw buildException(context.callstack.peek().callee)
            .expected.fn(fn)
            .toHaveParametersOrDispatcher()
        }
      }
      throw buildException(context.callstack.peek().callee, {
        code: ErrorCode.NO_MATCH,
        stack: context.stack
      })
        .expected.arguments(args)
        .toMatchDispatcher(this)
    },

    getAllPossibleFns() {
      const { length } = fns
      let possible = []
      for (let idx = 0; idx < length; idx++) {
        const fn = fns[idx]
        const meta = fnGetMeta(fn)
        if (meta.dispatcher) {
          possible = possible.concat(meta.dispatcher.getAllPossibleFns())
        } else {
          possible.push(fn)
        }
      }
      return possible
    }
  }
}

export default fnsToMultiFnDispatcher
