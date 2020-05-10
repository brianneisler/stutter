import anyToName from './anyToName'

const parameterToString = (parameter) =>
  `${anyToName(parameter)}:${anyToName(parameter.type)}`

export default parameterToString
