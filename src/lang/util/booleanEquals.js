import anyIsBoolean from './anyIsBoolean'

const booleanEquals = (boolean, any) => {
  if (!anyIsBoolean(any)) {
    return false
  }
  // NOTE BRN: using valueOf allows for Boolean instances to equal boolean literals
  return boolean.valueOf() === any.valueOf()
}

export default booleanEquals
