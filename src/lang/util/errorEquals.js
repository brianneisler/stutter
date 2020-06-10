import anyIsError from './anyIsError'

const errorEquals = (error, any) =>
  anyIsError(any) && error.name === any.name && error.message === any.message

export default errorEquals
