import anyIdenticalWithAny from './anyIdenticalWithAny'
import anyIsArray from './anyIsArray'
import arrayLikeEquals from './arrayLikeEquals'

describe('arrayLikeEquals', () => {
  describe('Array', () => {
    test('returns true for Arrays with equal values in same order', () => {
      expect(arrayLikeEquals([1, 2, 3], [1, 2, 3])).toBe(true)
    })

    test('returns true for Array and String that have same indexes and values', () => {
      expect(arrayLikeEquals(['f', 'o', 'o'], 'foo')).toBe(true)
    })

    test('returns false for Arrays with equal values in different order', () => {
      expect(arrayLikeEquals([1, 2, 3], [1, 3, 2])).toBe(false)
    })

    test('returns false for Arrays with equal values but additional value in one', () => {
      expect(arrayLikeEquals([1, 2, 3], [1, 2, 3, 4])).toBe(false)
    })

    test('handles recursive data structures', () => {
      const equalsFunc = (valueA, valueB, _equalsFunc, stackA, stackB) => {
        if (anyIsArray(valueA) && anyIsArray(valueB)) {
          return arrayLikeEquals(valueA, valueB, _equalsFunc, stackA, stackB)
        }
        return anyIdenticalWithAny(valueA, valueB)
      }
      const valueA = []
      valueA.push(valueA)
      const valueB = []
      valueB.push(valueB)
      expect(arrayLikeEquals(valueA, valueB, equalsFunc)).toBe(true)
    })

    test('handles nested data structures', () => {
      const equalsFunc = (valueA, valueB, _equalsFunc, stackA, stackB) => {
        if (anyIsArray(valueA) && anyIsArray(valueB)) {
          return arrayLikeEquals(valueA, valueB, _equalsFunc, stackA, stackB)
        }
        return anyIdenticalWithAny(valueA, valueB)
      }
      expect(arrayLikeEquals([1, 2, [3]], [1, 2, [3]], equalsFunc)).toBe(true)
      expect(arrayLikeEquals([1, 2, [3]], [1, 2, [4]], equalsFunc)).toBe(false)
    })
  })

  describe('String', () => {
    test('returns true for Strings with equal values in same order', () => {
      expect(arrayLikeEquals('bar', 'bar')).toBe(true)
    })

    test('returns false for Strings with equal values in different order', () => {
      expect(arrayLikeEquals('bar', 'rab')).toBe(false)
    })

    test('returns false for Strings with equal values but additional value in one', () => {
      expect(arrayLikeEquals('bar', 'bars')).toBe(false)
    })
  })

  describe('Arguments', () => {
    test('returns true for Arguments with equal values in same order', () => {
      const args1 = (function () {
        return arguments
      })('foo', 'bar', 'baz')
      const args2 = (function () {
        return arguments
      })('foo', 'bar', 'baz')
      expect(arrayLikeEquals(args1, args2)).toBe(true)
    })

    test('returns false for Arguments with equal values in different order', () => {
      const args1 = (function () {
        return arguments
      })('foo', 'bar', 'baz')
      const args2 = (function () {
        return arguments
      })('foo', 'baz', 'bar')
      expect(arrayLikeEquals(args1, args2)).toBe(false)
    })

    test('returns false for Arguments with equal values but additional value in one', () => {
      const args1 = (function () {
        return arguments
      })('foo', 'bar', 'baz')
      const args2 = (function () {
        return arguments
      })('foo', 'bar', 'baz', 'bim')
      expect(arrayLikeEquals(args1, args2)).toBe(false)
    })
  })
})
