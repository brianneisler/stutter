import arrayClone from './arrayClone'

const arrayPush = (array, value) => {
  const clone = arrayClone(array)
  clone.push(value)
  return clone
}

export default arrayPush
