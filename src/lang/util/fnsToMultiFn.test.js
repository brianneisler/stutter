import Number from '../types/Number'
import String from '../types/String'
import anyIsFn from './anyIsFn'
import createContext from './createContext'
import definitionToFn from './definitionToFn'
import fnCall from './fnCall'
import fnGetMeta from './fnGetMeta'
import fnsToMultiFn from './fnsToMultiFn'

describe('fnsToMultiFn', () => {
  test('generates a simple multi Fn from one Fn', () => {
    const fn = definitionToFn(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const multiFn = fnsToMultiFn([fn])
    expect(anyIsFn(multiFn)).toBe(true)
    expect(fnGetMeta(multiFn).dispatcher).toEqual({
      dispatch: expect.any(Function),
      getAllPossibleFns: expect.any(Function)
    })
  })

  test('works for partial single matches in a multi function from one function', () => {
    const testContext = createContext({
      callee: this
    })
    const fn = definitionToFn(
      (num, str) => {
        return `${num}-${str}`
      },
      [Number, String],
      { partial: true }
    )
    const multiFn = fnsToMultiFn([fn], { partial: true })
    const result = fnCall(multiFn, testContext, null, 123)
    expect(result).toBe('123-undefined')
  })

  test('correctly dispatches between two different parameterized functions', () => {
    const testContext = createContext({
      callee: this
    })
    const fn1 = definitionToFn(
      jest.fn((num, str) => {
        return `func1-${num}-${str}`
      }),
      [Number, String]
    )
    const fn2 = definitionToFn(
      jest.fn((str, num) => {
        return `func2-${str}-${num}`
      }),
      [String, Number]
    )
    const multiFn = fnsToMultiFn([fn1, fn2])
    expect(fnCall(multiFn, testContext, null, 123, 'foo')).toBe('func1-123-foo')
    expect(fnCall(multiFn, testContext, null, 'foo', 123)).toBe('func2-foo-123')
  })

  test('correctly dispatches to nested multi function', () => {
    const testContext = createContext({
      callee: this
    })
    const multiFn = fnsToMultiFn([
      definitionToFn(
        jest.fn((num, str) => {
          return `func1+${num}&${str}`
        }),
        [Number, String]
      ),
      definitionToFn(
        jest.fn((str, num) => {
          return `func2&${str}+${num}`
        }),
        [String, Number]
      )
    ])

    const multiFn2 = fnsToMultiFn([
      multiFn,
      definitionToFn(
        jest.fn((str, str2) => {
          return `func3&${str}&${str2}`
        }),
        [String, String]
      )
    ])
    expect(fnCall(multiFn2, testContext, null, 123, 'foo')).toBe(
      'func1+123&foo'
    )
    expect(fnCall(multiFn2, testContext, null, 'foo', 123)).toBe(
      'func2&foo+123'
    )
    expect(fnCall(multiFn2, testContext, null, 'foo', 'bar')).toBe(
      'func3&foo&bar'
    )
  })

  test('dispatch returns array of all matching functions in a multi match', () => {
    const fn1 = definitionToFn(
      jest.fn((str1, str2) => {
        return `func1-${str1}-${str2}`
      }),
      [String, String]
    )
    const fn2 = definitionToFn(
      jest.fn((str1, str2) => {
        return `func2-${str1}-${str2}`
      }),
      [String, String]
    )
    const fn3 = definitionToFn(
      jest.fn((str1, str2) => {
        return `func3-${str1}-${str2}`
      }),
      [String, String]
    )
    const multiFn = fnsToMultiFn([fn1, fn2, fn3])
    const result = multiFn.dispatch(
      createContext({
        callee: this
      }),
      ['foo', 'bar'],
      { multi: true }
    )
    expect(result).toEqual([
      {
        delta: 0,
        exact: true,
        fn: fn1,
        partial: false
      },
      {
        delta: 0,
        exact: true,
        fn: fn2,
        partial: false
      },
      {
        delta: 0,
        exact: true,
        fn: fn3,
        partial: false
      }
    ])
  })
})
