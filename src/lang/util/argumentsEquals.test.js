import { arrays, values } from '../../test'
import { without } from 'ramda'
import anyIdenticalWithAny from './anyIdenticalWithAny'
import anyIsArguments from './anyIsArguments'
import argumentsEquals from './argumentsEquals'

describe('arrayEquals', () => {
  test('returns true for Arguments with equal values in same order', () => {
    const args1 = (function () {
      return arguments
    })('foo', 'bar', 'baz')
    const args2 = (function () {
      return arguments
    })('foo', 'bar', 'baz')
    expect(argumentsEquals(args1, args2)).toBe(true)
  })

  test('returns false for Arguments with equal values in different order', () => {
    const args1 = (function () {
      return arguments
    })('foo', 'bar', 'baz')
    const args2 = (function () {
      return arguments
    })('foo', 'baz', 'bar')
    expect(argumentsEquals(args1, args2)).toBe(false)
  })

  test('returns false for Arguments with equal values but additional value in one', () => {
    const args1 = (function () {
      return arguments
    })('foo', 'bar', 'baz')
    const args2 = (function () {
      return arguments
    })('foo', 'bar', 'baz', 'bim')
    expect(argumentsEquals(args1, args2)).toBe(false)
  })

  test('returns false for all other values', () => {
    const args = (function () {
      return arguments
    })()
    expect((value) =>
      argumentsEquals(args, value)
    ).toHaveReturnedFalsyForValues(without(arrays(), values()))
  })

  test('handles nested data structures', () => {
    const equalsFunc = (valueA, valueB, _equalsFunc, stackA, stackB) => {
      if (anyIsArguments(valueA) && anyIsArguments(valueB)) {
        return argumentsEquals(valueA, valueB, _equalsFunc, stackA, stackB)
      }
      return anyIdenticalWithAny(valueA, valueB)
    }
    const nestedArgs1 = (function () {
      return arguments
    })(3)
    const args1 = (function () {
      return arguments
    })(1, 2, nestedArgs1)

    const nestedArgs2 = (function () {
      return arguments
    })(3)
    const args2 = (function () {
      return arguments
    })(1, 2, nestedArgs2)

    const nestedArgs3 = (function () {
      return arguments
    })(4)
    const args3 = (function () {
      return arguments
    })(1, 2, nestedArgs3)

    expect(argumentsEquals(args1, args2, equalsFunc)).toBe(true)
    expect(argumentsEquals(args1, args3, equalsFunc)).toBe(false)
  })
})
