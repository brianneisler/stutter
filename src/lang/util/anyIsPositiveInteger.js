import anyIsInteger from './anyIsInteger'

const anyIsPositiveInteger = (any) => anyIsInteger(any) && any >= 0

export default anyIsPositiveInteger
