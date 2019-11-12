import anyIsPlaceholder from './anyIsPlaceholder'
import fnGetMeta from './fnGetMeta'

const argumentsMatchToFnParameters = (args, fn, options) => {
  const { parameters } = fnGetMeta(fn)
  if (!parameters) {
    throw new Error(`parameter 'fn' must be a parameterized Fn instance`)
  }
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

  let exact = false
  if (args.length === parameters.length) {
    exact = true
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
    delta: args.length - parameters.length,
    exact,
    fn,
    partial
  }
}

export default argumentsMatchToFnParameters
