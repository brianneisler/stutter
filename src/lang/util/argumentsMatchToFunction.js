import anyIsPlaceholder from './anyIsPlaceholder'

const argumentsMatchToFunction = (args, func, options) => {
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

export default argumentsMatchToFunction
