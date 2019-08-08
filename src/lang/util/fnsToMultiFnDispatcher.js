import argumentsMatchToFn from './argumentsMatchToFn'

const errorNoMatch = () => {
  // TODO BRN: Enhance this error so that we know what we were working with.
  // Need a way of producing an Expected:toMatchParameter Exception when we
  // cannot find any matching functions
  const err = new Error(`Could not find matching function for given args.`)
  err.code = 'NO_MATCH'
  return err
}

const fnsToMultiFnDispatcher = (fns) => ({
  dispatch: (args, options) => {
    const { length } = fns
    if (options.multi) {
      let matches = []
      for (let idx = 0; idx < length; idx++) {
        const fn = fns[idx]
        if (fn.dispatcher) {
          matches = matches.concat(fn.dispatcher.dispatch(args, options))
        } else {
          const match = argumentsMatchToFn(args, fn, options)
          if (match) {
            matches.push(match)
          }
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
      } else {
        // TODO BRN: Instead of having to loop over and potentially check the
        // same types multiple times, we should generate a decision tree of type checks
        // to perform. The leaves of the tree are the results of the match. This
        // way each type involved only needs to be tested once.
        const match = argumentsMatchToFn(args, fn, options)
        if (match) {
          return match
        }
      }
    }
    throw errorNoMatch()
  }
})

export default fnsToMultiFnDispatcher
