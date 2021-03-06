import anyIdenticalWithAny from './anyIdenticalWithAny'
import objectHasOwnProperty from './objectHasOwnProperty'
import objectKeys from './objectKeys'

/**
 * Performs equality by iterating through keys on an object and returning false when any key has values which are not strictly equal between the arguments. Returns true when the values of all keys are strictly equal.
 *
 * @private
 * @function
 * @immutable
 * @pure
 * @since v0.1.0
 * @category lang.util
 * @param {Array | String | Function} selector The property path to set or functional selector
 * @param {object} objA The object to compare to B
 * @param {object} objB The object to compare to A
 * @returns {boolean} Whether or not the two objects are shallowly equal
 * @example
 *
 * objectShallowEquals({ a: 1, b: 2, c: undefined }, { a: 1, b: 2, c: undefined }) //=> true
 * objectShallowEquals({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }) //=> false
 */
const objectShallowEquals = (objA, objB) => {
  if (anyIdenticalWithAny(objA, objB)) {
    return true
  }

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false
  }

  const keysA = objectKeys(objA)
  const keysB = objectKeys(objB)

  if (keysA.length !== keysB.length) {
    return false
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    if (
      !objectHasOwnProperty(objB, keysA[i]) ||
      !anyIdenticalWithAny(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false
    }
  }

  return true
}

export default objectShallowEquals
