import anyIsBuffer from './anyIsBuffer'

const bufferEquals = (buffer, any) => {
  if (!anyIsBuffer(any)) {
    return false
  }
  if (buffer.length !== any.length) {
    return false
  }
  // NOTE BRN: The built in method of Buffer compares the Buffer bytes for exact
  // equality.
  return buffer.equals(any)
}

export default bufferEquals
