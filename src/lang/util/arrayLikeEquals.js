import ImmutableStack from './js/ImmutableStack'
import anyIdenticalWithAny from './anyIdenticalWithAny'
import objectHasOwnProperty from './objectHasOwnProperty'
import objectKeys from './objectKeys'

const arrayLikeEquals = (
  arrayLike,
  any,
  equalsFunc = anyIdenticalWithAny,
  stackA = ImmutableStack([]),
  stackB = ImmutableStack([])
) => {
  if (arrayLike === any) {
    return true
  }

  if (arrayLike.length !== any.length) {
    return false
  }

  let stackIdx = stackA.size - 1
  while (stackIdx >= 0) {
    if (stackA.get(stackIdx) === arrayLike) {
      return stackB.get(stackIdx) === any
    }
    stackIdx -= 1
  }

  stackA = stackA.push(arrayLike)
  stackB = stackB.push(any)

  // NOTE BRN: objectKeys will ensure that both properties and indexes are
  // returned and checked
  const keysA = objectKeys(arrayLike)

  let idx = keysA.length - 1
  while (idx >= 0) {
    const key = keysA[idx]
    if (
      !(
        objectHasOwnProperty(any, key) &&
        equalsFunc(any[key], arrayLike[key], equalsFunc, stackA, stackB)
      )
    ) {
      return false
    }
    idx -= 1
  }
  return true
}

export default arrayLikeEquals
