import arrayClone from './arrayClone'

const arrayPop = (array) => {
  if (array.length === 0) {
    return array
  }
  const clone = arrayClone(array)
  clone.pop()
  return clone
}

export default arrayPop
