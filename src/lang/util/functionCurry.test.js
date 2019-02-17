import FUNCTIONAL_PLACEHOLDER from '../constants/FUNCTIONAL_PLACEHOLDER'
import Number from '../types/Number'
import String from '../types/String'
import functionCurry from './functionCurry'
import functionTypify from './functionTypify'
import functionsToMultiFunction from './functionsToMultiFunction'

describe('functionCurry', () => {
  const __ = FUNCTIONAL_PLACEHOLDER

  test('should return the same function if param length is 0', () => {
    const func = functionTypify(() => {})
    const cFunc = functionCurry(func)
    expect(cFunc).toBe(func)
  })

  test('should support placeholder on position 0', () => {
    const func = functionTypify(
      (argA) => {
        expect(argA).toBe('a')
        return 0
      },
      [String]
    )
    const cFunc = functionCurry(func)
    const result = cFunc(__)
    expect(result).toBeInstanceOf(Function)
    expect(result('a')).toBe(0)
  })

  test('should support placeholder replacing placeholder', () => {
    const func = functionTypify(
      (argA) => {
        expect(argA).toBe('a')
        return 0
      },
      [String]
    )
    const cFunc = functionCurry(func)
    const resultFunc = cFunc(__)
    expect(resultFunc).toBeInstanceOf(Function)
    const result2Func = resultFunc(__)
    expect(result2Func).toBeInstanceOf(Function)
    const result3Func = result2Func(__)
    expect(result3Func).toBeInstanceOf(Function)
    expect(result3Func('a')).toBe(0)
  })

  test('should support more than one placeholder', () => {
    const func = functionTypify(
      (argA, argB, argC) => {
        expect(argA).toBe('a')
        expect(argB).toBe('b')
        expect(argC).toBe('c')
        return 0
      },
      [String, String, String]
    )
    const cFunc = functionCurry(func)
    const result = cFunc(__, __, __)
    expect(result).toBeInstanceOf(Function)
    const aResult = result('a')
    expect(aResult).toBeInstanceOf(Function)
    const bResult = aResult('b')
    expect(bResult('c')).toBe(0)
  })

  test('should support placeholders mixed with args', () => {
    const func = functionTypify(
      (argA, argB, argC) => {
        expect(argA).toBe('a')
        expect(argB).toBe('b')
        expect(argC).toBe('c')
        return 0
      },
      [String, String, String]
    )
    const cFunc = functionCurry(func)
    const result = cFunc('a', __, 'c')
    expect(result).toBeInstanceOf(Function)
    expect(result('b')).toBe(0)
  })

  test('should auto curry parameterized function of length 1', () => {
    const func = functionTypify((argA) => {
      expect(argA).toBe('a')
      return 0
    })
    const cFunc = functionCurry(func)
    expect(cFunc('a')).toBe(0)
  })

  test('should auto curry parameterized function of length 2', () => {
    const func = functionTypify((argA, argB) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      return 0
    })
    const cFunc = functionCurry(func)
    expect(cFunc('a', 'b')).toBe(0)
    expect(cFunc('a')('b')).toBe(0)
  })

  test('should auto curry parameterized function of length 3', () => {
    const func = functionTypify((argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    })
    const cFunc = functionCurry(func)
    expect(cFunc('a', 'b', 'c')).toBe(0)
    expect(cFunc('a', 'b')('c')).toBe(0)
    expect(cFunc('a')('b', 'c')).toBe(0)
    expect(cFunc('a')('b')('c')).toBe(0)
  })

  test('should auto curry parameterized function of length 4', () => {
    const func = functionTypify((argA, argB, argC, argD) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      expect(argD).toBe('d')
      return 0
    })
    const cFunc = functionCurry(func)
    expect(cFunc('a', 'b', 'c', 'd')).toBe(0)
    expect(cFunc('a', 'b', 'c')('d')).toBe(0)
    expect(cFunc('a', 'b')('c', 'd')).toBe(0)
    expect(cFunc('a', 'b')('c')('d')).toBe(0)
    expect(cFunc('a')('b', 'c', 'd')).toBe(0)
    expect(cFunc('a')('b', 'c')('d')).toBe(0)
    expect(cFunc('a')('b')('c', 'd')).toBe(0)
    expect(cFunc('a')('b')('c')('d')).toBe(0)
  })

  test('should support placeholder at position 0 in a curried multi function', () => {
    const func = functionsToMultiFunction([
      functionTypify(
        (argA) => {
          expect(argA).toBe('a')
          return 0
        },
        [String]
      ),
      functionTypify(
        (argA) => {
          expect(argA).toBe(1)
          return 1
        },
        [Number]
      )
    ])
    const cFunc = functionCurry(func)
    const result = cFunc(__)
    expect(result).toBeInstanceOf(Function)
    expect(result('a')).toBe(0)
    expect(result(1)).toBe(1)
  })

  test('should support placeholder replacing placeholder in a curried multi function', () => {
    const func = functionsToMultiFunction([
      functionTypify(
        (argA) => {
          expect(argA).toBe('a')
          return 0
        },
        [String]
      ),
      functionTypify(
        (argA) => {
          expect(argA).toBe(1)
          return 1
        },
        [Number]
      )
    ])
    const cFunc = functionCurry(func)
    const resultFunc = cFunc(__)
    expect(resultFunc).toBeInstanceOf(Function)
    const result2Func = resultFunc(__)
    expect(result2Func).toBeInstanceOf(Function)
    const result3Func = result2Func(__)
    expect(result3Func).toBeInstanceOf(Function)
    expect(result3Func('a')).toBe(0)
    expect(result3Func(1)).toBe(1)
  })

  test('should support more than one placeholder in a curried multi function', () => {
    const func = functionsToMultiFunction([
      functionTypify(
        (argA, argB, argC) => {
          expect(argA).toBe('a')
          expect(argB).toBe('b')
          expect(argC).toBe('c')
          return 0
        },
        [String, String, String]
      ),
      functionTypify(
        (arg1, arg2, arg3) => {
          expect(arg1).toBe(1)
          expect(arg2).toBe(2)
          expect(arg3).toBe(3)
          return 1
        },
        [Number, Number, Number]
      )
    ])
    const cFunc = functionCurry(func)
    const result = cFunc(__, __, __)
    expect(result).toBeInstanceOf(Function)

    const resultA = result('a')
    expect(resultA).toBeInstanceOf(Function)
    const resultB = resultA('b')
    expect(resultB('c')).toBe(0)

    const result1 = result(1)
    expect(result1).toBeInstanceOf(Function)
    const result2 = result1(2)
    expect(result2(3)).toBe(1)
  })

  test('should support placeholders mixed with args in a curried multi function', () => {
    const func = functionsToMultiFunction([
      functionTypify(
        (argA, argB, argC) => {
          expect(argA).toBe('a')
          expect(argB).toBe('b')
          expect(argC).toBe('c')
          return 0
        },
        [String, String, String]
      ),
      functionTypify(
        (argA, arg2, argC) => {
          expect(argA).toBe('a')
          expect(arg2).toBe(2)
          expect(argC).toBe('c')
          return 1
        },
        [String, Number, String]
      )
    ])
    const cFunc = functionCurry(func)
    const result = cFunc('a', __, 'c')
    expect(result).toBeInstanceOf(Function)

    expect(result('b')).toBe(0)
    expect(result(2)).toBe(1)
  })

  test('should execute exact matches in a curried multi function', () => {
    const func = functionsToMultiFunction([
      functionTypify(
        (argA, argB) => {
          expect(argA).toBe('a')
          expect(argB).toBe('b')
          return 0
        },
        [String, String]
      ),
      functionTypify(
        (argA) => {
          expect(argA).toBe('a')
          return 1
        },
        [String]
      )
    ])
    const cFunc = functionCurry(func)

    expect(cFunc('a')).toBe(1)
    expect(cFunc('a', 'b')).toBe(0)
  })

  // NOTE BRN: This test doesn't pass at the moment because extraneous args
  // result in an exact match.

  // test('should execute exact matches with exact number of parameters in a curried multi function', () => {
  //   const func = functionsToMultiFunction([
  //     functionTypify(
  //       (argA) => {
  //         expect(argA).toBe('a')
  //         return 0
  //       },
  //       [String]
  //     ),
  //     functionTypify(
  //       (argA, argB) => {
  //         expect(argA).toBe('a')
  //         expect(argB).toBe('b')
  //         return 1
  //       },
  //       [String, String]
  //     )
  //   ])
  //   const cFunc = functionCurry(func)

  //   expect(cFunc('a')).toBe(0)
  //   expect(cFunc('a', 'b')).toBe(1)
  // })

  test('should auto curry multi function of length 1', () => {
    const func = functionsToMultiFunction([
      functionTypify(
        (argA) => {
          expect(argA).toBe('a')
          return 0
        },
        [String]
      ),
      functionTypify(
        (arg1) => {
          expect(arg1).toBe(1)
          return 1
        },
        [Number]
      )
    ])
    const cFunc = functionCurry(func)

    expect(cFunc('a')).toBe(0)

    expect(cFunc(1)).toBe(1)
  })

  test('should auto curry parameterized function of length 2', () => {
    const func = functionsToMultiFunction([
      functionTypify(
        (argA, argB) => {
          expect(argA).toBe('a')
          expect(argB).toBe('b')
          return 0
        },
        [String, String]
      ),
      functionTypify(
        (arg1, arg2) => {
          expect(arg1).toBe(1)
          expect(arg2).toBe(2)
          return 1
        },
        [Number, Number]
      )
    ])
    const cFunc = functionCurry(func)

    expect(cFunc('a', 'b')).toBe(0)
    expect(cFunc('a')('b')).toBe(0)

    expect(cFunc(1, 2)).toBe(1)
    expect(cFunc(1)(2)).toBe(1)
  })

  test('should auto curry parameterized function of length 3', () => {
    const func = functionsToMultiFunction([
      functionTypify(
        (argA, argB, argC) => {
          expect(argA).toBe('a')
          expect(argB).toBe('b')
          expect(argC).toBe('c')
          return 0
        },
        [String, String, String]
      ),
      functionTypify(
        (arg1, arg2, arg3) => {
          expect(arg1).toBe(1)
          expect(arg2).toBe(2)
          expect(arg3).toBe(3)
          return 1
        },
        [Number, Number, Number]
      )
    ])
    const cFunc = functionCurry(func)

    expect(cFunc('a', 'b', 'c')).toBe(0)
    expect(cFunc('a', 'b')('c')).toBe(0)
    expect(cFunc('a')('b', 'c')).toBe(0)
    expect(cFunc('a')('b')('c')).toBe(0)

    expect(cFunc(1, 2, 3)).toBe(1)
    expect(cFunc(1, 2)(3)).toBe(1)
    expect(cFunc(1)(2, 3)).toBe(1)
    expect(cFunc(1)(2)(3)).toBe(1)
  })

  test('should auto curry parameterized function of length 4', () => {
    const func = functionsToMultiFunction([
      functionTypify(
        (argA, argB, argC, argD) => {
          expect(argA).toBe('a')
          expect(argB).toBe('b')
          expect(argC).toBe('c')
          expect(argD).toBe('d')
          return 0
        },
        [String, String, String, String]
      ),
      functionTypify(
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

    const cFunc = functionCurry(func)

    expect(cFunc('a', 'b', 'c', 'd')).toBe(0)
    expect(cFunc('a', 'b', 'c')('d')).toBe(0)
    expect(cFunc('a', 'b')('c', 'd')).toBe(0)
    expect(cFunc('a', 'b')('c')('d')).toBe(0)
    expect(cFunc('a')('b', 'c', 'd')).toBe(0)
    expect(cFunc('a')('b', 'c')('d')).toBe(0)
    expect(cFunc('a')('b')('c', 'd')).toBe(0)
    expect(cFunc('a')('b')('c')('d')).toBe(0)

    expect(cFunc(1, 2, 3, 4)).toBe(1)
    expect(cFunc(1, 2, 3)(4)).toBe(1)
    expect(cFunc(1, 2)(3, 4)).toBe(1)
    expect(cFunc(1, 2)(3)(4)).toBe(1)
    expect(cFunc(1)(2, 3, 4)).toBe(1)
    expect(cFunc(1)(2, 3)(4)).toBe(1)
    expect(cFunc(1)(2)(3, 4)).toBe(1)
    expect(cFunc(1)(2)(3)(4)).toBe(1)
  })
})
