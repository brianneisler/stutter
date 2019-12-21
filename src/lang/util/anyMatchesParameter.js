import anyIsOrSatisfies from './anyIsOrSatisfies'

const anyMatchesParameter = (any, parameter, meta) => {
  return anyIsOrSatisfies(any, parameter.type, meta)
}

export default anyMatchesParameter
