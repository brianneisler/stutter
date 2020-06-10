import ImmutableStack from './js/ImmutableStack'
import anyIsArray from './anyIsArray'

const arrayEquals = (
  array,
  any,
  equalsFunc,
  stackA = ImmutableStack([]),
  stackB = ImmutableStack([])
) => {
  if (array === any) {
    return true
  }
  if (!anyIsArray(any)) {
    return false
  }

  if (array.length !== any.length) {
    return false
  }

  let stackIdx = stackA.length - 1
  while (stackIdx >= 0) {
    if (stackA.get(stackIdx) === array) {
      return stackB.get(stackIdx) === any
    }
    stackIdx -= 1
  }

  const indexesA = arrayIndexes(array)
  const indexesB = arrayIndexes(any)
  const extendedStackA = stackA.push(array)
  const extendedStackB = stackB.push(any)

  let idx = keysA.length - 1
  while (idx >= 0) {
    const key = keysA[idx]
    if (
      !(
        has(key, valueB) &&
        baseEquals(valueB[key], valueA[key], extendedStackA, extendedStackB)
      )
    ) {
      return false
    }
    idx -= 1
  }
  return true
}

export default arrayEquals
