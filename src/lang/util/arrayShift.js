import arrayClone from './arrayClone'

const arrayShift = (array) => {
  if (array.length === 0) {
    return array
  }
  const clone = arrayClone(array)
  clone.shift()
  return clone
}

export default arrayShift
