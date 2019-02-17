import Number from '../types/Number'
import String from '../types/String'
import functionTypify from './functionTypify'
import functionsToMultiFunction from './functionsToMultiFunction'

describe('functionsToMultiFunction', () => {
  test('generates a simple multi function from one function', () => {
    const func = functionTypify(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const mFunc = functionsToMultiFunction([func])
    expect(mFunc).toBeInstanceOf(Function)
    expect(mFunc.dispatcher).toEqual({
      dispatch: expect.any(Function)
    })
  })

  test('works for partial single matches in a multi function from one function', () => {
    const func = functionTypify(
      (num, str) => {
        return `${num}-${str}`
      },
      [Number, String]
    )
    const mFunc = functionsToMultiFunction([func], { partial: true })
    expect(mFunc(123)).toBe('123-undefined')
  })

  test('correctly dispatches between two different parameterized functions', () => {
    const func1 = functionTypify(
      jest.fn((num, str) => {
        return `func1-${num}-${str}`
      }),
      [Number, String]
    )
    const func2 = functionTypify(
      jest.fn((str, num) => {
        return `func2-${str}-${num}`
      }),
      [String, Number]
    )
    const mFunc = functionsToMultiFunction([func1, func2])
    expect(mFunc(123, 'foo')).toBe('func1-123-foo')
    expect(mFunc('foo', 123)).toBe('func2-foo-123')
  })

  test('correctly dispatches to nested multi function', () => {
    const mFunc = functionsToMultiFunction([
      functionTypify(
        jest.fn((num, str) => {
          return `func1-${num}-${str}`
        }),
        [Number, String]
      ),
      functionTypify(
        jest.fn((str, num) => {
          return `func2-${str}-${num}`
        }),
        [String, Number]
      )
    ])

    const mFunc2 = functionsToMultiFunction([
      mFunc,
      functionTypify(
        jest.fn((str, str2) => {
          return `func3-${str}-${str2}`
        }),
        [String, String]
      )
    ])
    expect(mFunc2(123, 'foo')).toBe('func1-123-foo')
    expect(mFunc2('foo', 123)).toBe('func2-foo-123')
    expect(mFunc2('foo', 'bar')).toBe('func3-foo-bar')
  })

  test('dispatch returns array of all matching functions in a multi match', () => {
    const func1 = functionTypify(
      jest.fn((str1, str2) => {
        return `func1-${str1}-${str2}`
      }),
      [String, String]
    )
    const func2 = functionTypify(
      jest.fn((str1, str2) => {
        return `func2-${str1}-${str2}`
      }),
      [String, String]
    )
    const func3 = functionTypify(
      jest.fn((str1, str2) => {
        return `func3-${str1}-${str2}`
      }),
      [String, String]
    )
    const mFunc = functionsToMultiFunction([func1, func2, func3])
    const result = mFunc.dispatcher.dispatch(['foo', 'bar'], { multi: true })
    expect(result).toEqual([
      {
        func: func1,
        partial: false
      },
      {
        func: func2,
        partial: false
      },
      {
        func: func3,
        partial: false
      }
    ])
  })
})
