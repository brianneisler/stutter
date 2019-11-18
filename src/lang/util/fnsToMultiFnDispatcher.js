import argumentsMatchToFnParameters from './argumentsMatchToFnParameters'
import errorNoMatch from './errorNoMatch'
import fnGetMeta from './fnGetMeta'

const fnsToMultiFnDispatcher = (fns) => ({
  dispatch: (args, options) => {
    const { length } = fns
    if (options.multi) {
      let matches = []
      for (let idx = 0; idx < length; idx++) {
        const fn = fns[idx]
        const meta = fnGetMeta(fn)
        if (meta.dispatcher) {
          matches = matches.concat(meta.dispatcher.dispatch(args, options))
        } else if (meta.parameters) {
          const match = argumentsMatchToFnParameters(args, fn, options)
          if (match) {
            matches.push(match)
          }
        } else {
          throw new Error(
            `Fn must have either a dispatcher or parameters in order to be dispatched to. This fn has neither ${fn}`
          )
        }
      }
      return matches
    }

    for (let idx = 0; idx < length; idx++) {
      const fn = fns[idx]
      if (fn.dispatcher) {
        try {
          return fn.dispatcher.dispatch(args, options)
        } catch (error) {
          if (error.code !== 'NO_MATCH') {
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
        throw new Error(
          `Fn must have either a dispatcher or parameters in order to be dispatched to. This fn has neither ${fn}`
        )
      }
    }
    throw errorNoMatch()
  }
})

export default fnsToMultiFnDispatcher
