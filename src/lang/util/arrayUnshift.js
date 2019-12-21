import arrayClone from './arrayClone'

const arrayUnshift = (array, value) => {
  const clone = arrayClone(array)
  clone.unshift(value)
  return clone
}

export default arrayUnshift
