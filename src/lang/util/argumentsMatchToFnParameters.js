import anyIsPlaceholder from './anyIsPlaceholder'
import anyMatchesParameter from './anyMatchesParameter'
import buildException from './buildException'
import fnGetMeta from './fnGetMeta'

const argumentsMatchToFnParameters = (args, fn, options) => {
  const meta = fnGetMeta(fn)
  const { curried } = meta
  const parameters = curried ? curried.parameters : meta.parameters
  if (!parameters) {
    throw buildException(fn).expected.fn().toHaveParameters()
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

  let delta = args.length - parameters.length
  for (let idx = 0; idx < length; idx++) {
    const parameter = parameters[idx]
    const arg = args[idx]
    if (anyIsPlaceholder(arg)) {
      if (!options.partial) {
        return false
      }
      delta -= 1
      partial = true
    } else if (!anyMatchesParameter(arg, parameter, meta)) {
      return false
    }
  }

  const exact = delta === 0 ? true : false

  return {
    delta,
    exact,
    fn,
    partial
  }
}

export default argumentsMatchToFnParameters
