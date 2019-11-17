import FUNCTIONAL_PLACEHOLDER from '../constants/FUNCTIONAL_PLACEHOLDER'
import Number from '../types/Number'
import String from '../types/String'
import anyIsFn from './anyIsFn'
import definitionToFn from './definitionToFn'
import fnsToMultiFn from './fnsToMultiFn'
import functionCurry from './functionCurry'

describe('functionCurry', () => {
  const __ = FUNCTIONAL_PLACEHOLDER

  test('should return the same Fn if param length is 0', () => {
    const fn = definitionToFn(() => {})
    const curriedFn = functionCurry(fn)
    expect(curriedFn).toBe(fn)
  })

  test('should support placeholder on position 0', () => {
    const fn = definitionToFn(
      (argA) => {
        expect(argA).toBe('a')
        return 0
      },
      [String]
    )
    const curriedFn = functionCurry(fn)
    expect(anyIsFn(curriedFn)).toBe(true)
    const result = curriedFn(__)
    expect(anyIsFn(result)).toBe(true)
    expect(result('a')).toBe(0)
  })

  test('should support placeholder replacing placeholder', () => {
    const fn = definitionToFn(
      (argA) => {
        expect(argA).toBe('a')
        return 0
      },
      [String]
    )
    const curriedFn = functionCurry(fn)
    const resultFn = curriedFn(__)
    expect(resultFn).toBeInstanceOf(Function)
    expect(anyIsFn(resultFn)).toBe(true)
    const result2Fn = resultFn(__)
    expect(result2Fn).toBeInstanceOf(Function)
    const result3Fn = result2Fn(__)
    expect(result3Fn).toBeInstanceOf(Function)
    expect(result3Fn('a')).toBe(0)
  })

  test('should support more than one placeholder', () => {
    const func = definitionToFn(
      (argA, argB, argC) => {
        expect(argA).toBe('a')
        expect(argB).toBe('b')
        expect(argC).toBe('c')
        return 0
      },
      [String, String, String]
    )
    const curriedFn = functionCurry(func)
    const result = curriedFn(__, __, __)
    expect(result).toBeInstanceOf(Function)
    const aResult = result('a')
    expect(aResult).toBeInstanceOf(Function)
    const bResult = aResult('b')
    expect(bResult('c')).toBe(0)
  })

  test('should support placeholders mixed with args', () => {
    const fn = definitionToFn(
      (argA, argB, argC) => {
        expect(argA).toBe('a')
        expect(argB).toBe('b')
        expect(argC).toBe('c')
        return 0
      },
      [String, String, String]
    )
    const curriedFn = functionCurry(fn)
    const result = curriedFn('a', __, 'c')
    expect(result).toBeInstanceOf(Function)
    expect(result('b')).toBe(0)
  })

  test('should auto curry parameterized function of length 1', () => {
    const func = definitionToFn((argA) => {
      expect(argA).toBe('a')
      return 0
    })
    const curriedFn = functionCurry(func)
    expect(curriedFn('a')).toBe(0)
  })

  test('should auto curry parameterized function of length 2', () => {
    const fn = definitionToFn((argA, argB) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      return 0
    })
    const curriedFn = functionCurry(fn)
    expect(curriedFn('a', 'b')).toBe(0)
    expect(curriedFn('a')('b')).toBe(0)
  })

  test('should auto curry parameterized function of length 3', () => {
    const fn = definitionToFn((argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    })
    const curriedFn = functionCurry(fn)
    expect(curriedFn('a', 'b', 'c')).toBe(0)
    expect(curriedFn('a', 'b')('c')).toBe(0)
    expect(curriedFn('a')('b', 'c')).toBe(0)
    expect(curriedFn('a')('b')('c')).toBe(0)
  })

  test('should auto curry parameterized function of length 4', () => {
    const fn = definitionToFn((argA, argB, argC, argD) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      expect(argD).toBe('d')
      return 0
    })
    const curriedFn = functionCurry(fn)
    expect(curriedFn('a', 'b', 'c', 'd')).toBe(0)
    expect(curriedFn('a', 'b', 'c')('d')).toBe(0)
    expect(curriedFn('a', 'b')('c', 'd')).toBe(0)
    expect(curriedFn('a', 'b')('c')('d')).toBe(0)
    expect(curriedFn('a')('b', 'c', 'd')).toBe(0)
    expect(curriedFn('a')('b', 'c')('d')).toBe(0)
    expect(curriedFn('a')('b')('c', 'd')).toBe(0)
    expect(curriedFn('a')('b')('c')('d')).toBe(0)
  })

  test('should support placeholder at position 0 in a curried multi function', () => {
    const fn = fnsToMultiFn([
      definitionToFn(
        (argA) => {
          expect(argA).toBe('a')
          return 0
        },
        [String]
      ),
      definitionToFn(
        (argA) => {
          expect(argA).toBe(1)
          return 1
        },
        [Number]
      )
    ])
    const curriedFn = functionCurry(fn)
    const result = curriedFn(__)
    expect(result).toBeInstanceOf(Function)
    expect(result('a')).toBe(0)
    expect(result(1)).toBe(1)
  })

  test('should support placeholder replacing placeholder in a curried multi function', () => {
    const fn = fnsToMultiFn([
      definitionToFn(
        (argA) => {
          expect(argA).toBe('a')
          return 0
        },
        [String]
      ),
      definitionToFn(
        (argA) => {
          expect(argA).toBe(1)
          return 1
        },
        [Number]
      )
    ])
    const curriedFn = functionCurry(fn)
    const resultFn = curriedFn(__)
    expect(resultFn).toBeInstanceOf(Function)
    const result2Fn = resultFn(__)
    expect(result2Fn).toBeInstanceOf(Function)
    const result3Fn = result2Fn(__)
    expect(result3Fn).toBeInstanceOf(Function)
    expect(result3Fn('a')).toBe(0)
    expect(result3Fn(1)).toBe(1)
  })

  test('should support more than one placeholder in a curried multi function', () => {
    const fn = fnsToMultiFn([
      definitionToFn(
        (argA, argB, argC) => {
          expect(argA).toBe('a')
          expect(argB).toBe('b')
          expect(argC).toBe('c')
          return 0
        },
        [String, String, String]
      ),
      definitionToFn(
        (arg1, arg2, arg3) => {
          expect(arg1).toBe(1)
          expect(arg2).toBe(2)
          expect(arg3).toBe(3)
          return 1
        },
        [Number, Number, Number]
      )
    ])
    const curriedFn = functionCurry(fn)
    const result = curriedFn(__, __, __)
    expect(result).toBeInstanceOf(Function)

    const resultA = result('a')
    expect(resultA).toBeInstanceOf(Function)
    const resultB = resultA('b')
    expect(resultB).toBeInstanceOf(Function)
    const resultC = resultB('c')
    expect(resultC).toBe(0)

    const result1 = result(1)
    expect(result1).toBeInstanceOf(Function)
    const result2 = result1(2)
    expect(result2(3)).toBe(1)
  })

  test('should support placeholders mixed with args in a curried multi function', () => {
    const fn = fnsToMultiFn([
      definitionToFn(
        (argA, argB, argC) => {
          expect(argA).toBe('a')
          expect(argB).toBe('b')
          expect(argC).toBe('c')
          return 0
        },
        [String, String, String]
      ),
      definitionToFn(
        (argA, arg2, argC) => {
          expect(argA).toBe('a')
          expect(arg2).toBe(2)
          expect(argC).toBe('c')
          return 1
        },
        [String, Number, String]
      )
    ])
    const curriedFn = functionCurry(fn)
    const result = curriedFn('a', __, 'c')
    expect(result).toBeInstanceOf(Function)

    expect(result('b')).toBe(0)
    expect(result(2)).toBe(1)
  })

  test('should execute exact matches in a curried multi function', () => {
    const fn = fnsToMultiFn([
      definitionToFn(
        (argA, argB) => {
          expect(argA).toBe('a')
          expect(argB).toBe('b')
          return 0
        },
        [String, String]
      ),
      definitionToFn(
        (argA) => {
          expect(argA).toBe('a')
          return 1
        },
        [String]
      )
    ])
    const curriedFn = functionCurry(fn)

    expect(curriedFn('a')).toBe(1)
    expect(curriedFn('a', 'b')).toBe(0)
  })

  // NOTE BRN: This test doesn't pass at the moment because extraneous args
  // result in an exact match.

  test('should execute exact matches with exact number of parameters in a curried multi function', () => {
    const fn = fnsToMultiFn([
      definitionToFn(
        (argA) => {
          expect(argA).toBe('a')
          return 0
        },
        [String]
      ),
      definitionToFn(
        (argA, argB) => {
          expect(argA).toBe('a')
          expect(argB).toBe('b')
          return 1
        },
        [String, String]
      )
    ])
    const curriedFn = functionCurry(fn)

    expect(curriedFn('a')).toBe(0)
    expect(curriedFn('a', 'b')).toBe(1)
  })

  test('should auto curry multi function of length 1', () => {
    const fn = fnsToMultiFn([
      definitionToFn(
        (argA) => {
          expect(argA).toBe('a')
          return 0
        },
        [String]
      ),
      definitionToFn(
        (arg1) => {
          expect(arg1).toBe(1)
          return 1
        },
        [Number]
      )
    ])
    const curriedFn = functionCurry(fn)

    expect(curriedFn('a')).toBe(0)

    expect(curriedFn(1)).toBe(1)
  })

  test('should auto curry parameterized function of length 2', () => {
    const fn = fnsToMultiFn([
      definitionToFn(
        (argA, argB) => {
          expect(argA).toBe('a')
          expect(argB).toBe('b')
          return 0
        },
        [String, String]
      ),
      definitionToFn(
        (arg1, arg2) => {
          expect(arg1).toBe(1)
          expect(arg2).toBe(2)
          return 1
        },
        [Number, Number]
      )
    ])
    const curriedFn = functionCurry(fn)

    expect(curriedFn('a', 'b')).toBe(0)
    expect(curriedFn('a')('b')).toBe(0)

    expect(curriedFn(1, 2)).toBe(1)
    expect(curriedFn(1)(2)).toBe(1)
  })

  test('should auto curry parameterized function of length 3', () => {
    const fn = fnsToMultiFn([
      definitionToFn(
        (argA, argB, argC) => {
          expect(argA).toBe('a')
          expect(argB).toBe('b')
          expect(argC).toBe('c')
          return 0
        },
        [String, String, String]
      ),
      definitionToFn(
        (arg1, arg2, arg3) => {
          expect(arg1).toBe(1)
          expect(arg2).toBe(2)
          expect(arg3).toBe(3)
          return 1
        },
        [Number, Number, Number]
      )
    ])
    const curriedFn = functionCurry(fn)

    expect(curriedFn('a', 'b', 'c')).toBe(0)
    expect(curriedFn('a', 'b')('c')).toBe(0)
    expect(curriedFn('a')('b', 'c')).toBe(0)
    expect(curriedFn('a')('b')('c')).toBe(0)

    expect(curriedFn(1, 2, 3)).toBe(1)
    expect(curriedFn(1, 2)(3)).toBe(1)
    expect(curriedFn(1)(2, 3)).toBe(1)
    expect(curriedFn(1)(2)(3)).toBe(1)
  })

  test('should auto curry parameterized function of length 4', () => {
    const fn = fnsToMultiFn([
      definitionToFn(
        (argA, argB, argC, argD) => {
          expect(argA).toBe('a')
          expect(argB).toBe('b')
          expect(argC).toBe('c')
          expect(argD).toBe('d')
          return 0
        },
        [String, String, String, String]
      ),
      definitionToFn(
        (arg1, arg2, arg3, arg4) => {
          expect(arg1).toBe(1)
          expect(arg2).toBe(2)
          expect(arg3).toBe(3)
          expect(arg4).toBe(4)
          return 1
        },
        [Number, Number, Number, Number]
      )
    ])

    const curriedFn = functionCurry(fn)

    expect(curriedFn('a', 'b', 'c', 'd')).toBe(0)
    expect(curriedFn('a', 'b', 'c')('d')).toBe(0)
    expect(curriedFn('a', 'b')('c', 'd')).toBe(0)
    expect(curriedFn('a', 'b')('c')('d')).toBe(0)
    expect(curriedFn('a')('b', 'c', 'd')).toBe(0)
    expect(curriedFn('a')('b', 'c')('d')).toBe(0)
    expect(curriedFn('a')('b')('c', 'd')).toBe(0)
    expect(curriedFn('a')('b')('c')('d')).toBe(0)

    expect(curriedFn(1, 2, 3, 4)).toBe(1)
    expect(curriedFn(1, 2, 3)(4)).toBe(1)
    expect(curriedFn(1, 2)(3, 4)).toBe(1)
    expect(curriedFn(1, 2)(3)(4)).toBe(1)
    expect(curriedFn(1)(2, 3, 4)).toBe(1)
    expect(curriedFn(1)(2, 3)(4)).toBe(1)
    expect(curriedFn(1)(2)(3, 4)).toBe(1)
    expect(curriedFn(1)(2)(3)(4)).toBe(1)
  })
})
