import anyIsArray from './anyIsArray'
import anyIsPlaceholder from './anyIsPlaceholder'
import dispatcherToMultiFunction from './dispatcherToMultiFunction'

const errorNoMatch = () => {
  // TODO BRN: Enhance this error so that we know what we were working with.
  // Need a way of producing an Expected:toMatchParameter Exception when we
  // cannot find any matching functions
  const err = new Error(`Could not find matching function for given args.`)
  err.code = 'NO_MATCH'
  return err
}

const matchArgsToParams = (args, func, options) => {
  const { parameters } = func
  let { length } = parameters
  let partial = false
  if (args.length < parameters.length) {
    if (options.partial) {
      // NOTE BRN: in a partial, args.length can be less than params
      ;({ length } = args)
      partial = true
    } else {
      return false
    }
  }
  for (let idx = 0; idx < length; idx++) {
    const parameter = parameters[idx]
    const arg = args[idx]
    if (anyIsPlaceholder(arg)) {
      if (!options.partial) {
        return false
      }
      partial = true
    } else if (!parameter.type.is(arg)) {
      return false
    }
  }
  return {
    func,
    partial
  }
}

const newDispatcher = (funcs) => ({
  dispatch: (args, options) => {
    const { length } = funcs
    if (options.multi) {
      let matches = []
      for (let idx = 0; idx < length; idx++) {
        const func = funcs[idx]
        if (func.dispatcher) {
          matches = matches.concat(func.dispatcher.dispatch(args, options))
        } else {
          const match = matchArgsToParams(args, func, options)
          if (match) {
            matches.push(match)
          }
        }
      }
      return matches
    }

    for (let idx = 0; idx < length; idx++) {
      const func = funcs[idx]
      if (func.dispatcher) {
        try {
          return func.dispatcher.dispatch(args, options)
        } catch (error) {
          if (error.code !== 'NO_MATCH') {
            throw error
          }
        }
      } else {
        const match = matchArgsToParams(args, func, options)
        if (match) {
          return match
        }
      }
    }
    throw errorNoMatch()
  }
})

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
  return dispatcherToMultiFunction(newDispatcher(funcs), options)
}

export default functionsToMultiFunction
