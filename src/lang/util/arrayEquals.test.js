import { arrays, values } from '../../test'
import { without } from 'ramda'
import anyIdenticalWithAny from './anyIdenticalWithAny'
import anyIsArray from './anyIsArray'
import arrayEquals from './arrayEquals'

describe('arrayEquals', () => {
  test('returns true for Arrays with equal values in same order', () => {
    expect(arrayEquals([1, 2, 3], [1, 2, 3])).toBe(true)
  })

  test('returns false for Arrays with equal values in different order', () => {
    expect(arrayEquals([1, 2, 3], [1, 3, 2])).toBe(false)
  })

  test('returns false for Arrays with equal values but additional value in one', () => {
    expect(arrayEquals([1, 2, 3], [1, 2, 3, 4])).toBe(false)
  })

  test('returns false for all other values', () => {
    expect((value) => arrayEquals([], value)).toHaveReturnedFalsyForValues(
      without(arrays(), values())
    )
  })

  test('handles recursive data structures', () => {
    const equalsFunc = (valueA, valueB, _equalsFunc, stackA, stackB) => {
      if (anyIsArray(valueA) && anyIsArray(valueB)) {
        return arrayEquals(valueA, valueB, _equalsFunc, stackA, stackB)
      }
      return anyIdenticalWithAny(valueA, valueB)
    }
    const valueA = []
    valueA.push(valueA)
    const valueB = []
    valueB.push(valueB)
    expect(arrayEquals(valueA, valueB, equalsFunc)).toBe(true)
  })

  test('handles nested data structures', () => {
    const equalsFunc = (valueA, valueB, _equalsFunc, stackA, stackB) => {
      if (anyIsArray(valueA) && anyIsArray(valueB)) {
        return arrayEquals(valueA, valueB, _equalsFunc, stackA, stackB)
      }
      return anyIdenticalWithAny(valueA, valueB)
    }
    expect(arrayEquals([1, 2, [3]], [1, 2, [3]], equalsFunc)).toBe(true)
    expect(arrayEquals([1, 2, [3]], [1, 2, [4]], equalsFunc)).toBe(false)
  })
})
