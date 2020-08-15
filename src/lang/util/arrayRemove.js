import arrayForEach from './arrayForEach'

const arrayRemove = (array, predicate) => {
  const result = []
  arrayForEach(array, (value) => {
    if (!predicate(value)) {
      result.push(value)
    }
  })
  // NOTE BRN: Preserve identity if no changes were made
  if (result.length === array.length) {
    return array
  }
  return result
}

export default arrayRemove
