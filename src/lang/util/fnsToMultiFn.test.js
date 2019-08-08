import Fn from './js/Fn'
import Number from '../types/Number'
import String from '../types/String'
import buildFn from './buildFn'
import fnCall from './fnCall'
import fnsToMultiFn from './fnsToMultiFn'

describe('fnsToMultiFn', () => {
  test('generates a simple multi function from one function', () => {
    const func = buildFn(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const multiFn = fnsToMultiFn([func])
    expect(multiFn).toBeInstanceOf(Fn)
    expect(multiFn.dispatcher).toEqual({
      dispatch: expect.any(Function)
    })
  })

  test('works for partial single matches in a multi function from one function', () => {
    const fn = buildFn(
      (num, str) => {
        return `${num}-${str}`
      },
      [Number, String]
    )
    const multiFn = fnsToMultiFn([fn], { partial: true })
    expect(fnCall(multiFn, 123)).toBe('123-undefined')
  })

  test('correctly dispatches between two different parameterized functions', () => {
    const fn1 = buildFn(
      jest.fn((num, str) => {
        return `func1-${num}-${str}`
      }),
      [Number, String]
    )
    const fn2 = buildFn(
      jest.fn((str, num) => {
        return `func2-${str}-${num}`
      }),
      [String, Number]
    )
    const multiFn = fnsToMultiFn([fn1, fn2])
    expect(fnCall(multiFn, 123, 'foo')).toBe('func1-123-foo')
    expect(fnCall(multiFn, 'foo', 123)).toBe('func2-foo-123')
  })

  test('correctly dispatches to nested multi function', () => {
    const multiFn = fnsToMultiFn([
      buildFn(
        jest.fn((num, str) => {
          return `func1-${num}-${str}`
        }),
        [Number, String]
      ),
      buildFn(
        jest.fn((str, num) => {
          return `func2-${str}-${num}`
        }),
        [String, Number]
      )
    ])

    const multiFn2 = fnsToMultiFn([
      multiFn,
      buildFn(
        jest.fn((str, str2) => {
          return `func3-${str}-${str2}`
        }),
        [String, String]
      )
    ])
    expect(fnCall(multiFn2, 123, 'foo')).toBe('func1-123-foo')
    expect(fnCall(multiFn2, 'foo', 123)).toBe('func2-foo-123')
    expect(fnCall(multiFn2, 'foo', 'bar')).toBe('func3-foo-bar')
  })

  test('dispatch returns array of all matching functions in a multi match', () => {
    const fn1 = buildFn(
      jest.fn((str1, str2) => {
        return `func1-${str1}-${str2}`
      }),
      [String, String]
    )
    const fn2 = buildFn(
      jest.fn((str1, str2) => {
        return `func2-${str1}-${str2}`
      }),
      [String, String]
    )
    const fn3 = buildFn(
      jest.fn((str1, str2) => {
        return `func3-${str1}-${str2}`
      }),
      [String, String]
    )
    const multiFn = fnsToMultiFn([fn1, fn2, fn3])
    const result = multiFn.dispatcher.dispatch(['foo', 'bar'], { multi: true })
    expect(result).toEqual([
      {
        fn: fn1,
        partial: false
      },
      {
        fn: fn2,
        partial: false
      },
      {
        fn: fn3,
        partial: false
      }
    ])
  })
})
