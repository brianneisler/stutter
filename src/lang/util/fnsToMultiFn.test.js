import Dispatcher from './js/Dispatcher'
import ImmutableList from './js/ImmutableList'
import Number from '../types/Number'
import Self from '../types/Self'
import String from '../types/String'
import anyIsFn from './anyIsFn'
import createContext from './createContext'
import definitionToFn from './definitionToFn'
import fnCall from './fnCall'
import fnsToMultiFn from './fnsToMultiFn'

describe('fnsToMultiFn', () => {
  test('generates a simple multi Fn from one Fn', () => {
    const fn = definitionToFn(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const fns = ImmutableList([fn])
    const multiFn = fnsToMultiFn(fns)
    expect(anyIsFn(multiFn)).toBe(true)
    expect(multiFn.dispatcher).toBeInstanceOf(Dispatcher)
    expect(multiFn.dispatcher.fns).toBe(fns)
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
    const multiFn = fnsToMultiFn(ImmutableList([fn]), { partial: true })
    const result = fnCall(multiFn, testContext, 123)
    expect(result).toBe('123-undefined')
  })

  test('correctly invokes between two different parameterized functions', () => {
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
    const multiFn = fnsToMultiFn(ImmutableList([fn1, fn2]))
    expect(fnCall(multiFn, testContext, 123, 'foo')).toBe('func1-123-foo')
    expect(fnCall(multiFn, testContext, 'foo', 123)).toBe('func2-foo-123')
  })

  test('correctly invokes nested multi function', () => {
    const testContext = createContext({
      callee: this
    })
    const multiFn = fnsToMultiFn(
      ImmutableList([
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
    )

    const multiFn2 = fnsToMultiFn(
      ImmutableList([
        multiFn,
        definitionToFn(
          jest.fn((str, str2) => {
            return `func3&${str}&${str2}`
          }),
          [String, String]
        )
      ])
    )
    expect(fnCall(multiFn2, testContext, 123, 'foo')).toBe('func1+123&foo')
    expect(fnCall(multiFn2, testContext, 'foo', 123)).toBe('func2&foo+123')
    expect(fnCall(multiFn2, testContext, 'foo', 'bar')).toBe('func3&foo&bar')
  })

  test('correctly dispatches when argument matches the Self type in a multi Fn', () => {
    const testContext = createContext({
      callee: this
    })
    const fn1 = definitionToFn(
      jest.fn((str1, str2) => {
        return `func1-${str1}-${str2}`
      }),
      [Self, String]
    )
    const fn2 = definitionToFn(
      jest.fn((str, num) => {
        return `func2-${str}-${num}`
      }),
      [Self, Number]
    )
    let multiFn = fnsToMultiFn(ImmutableList([fn1, fn2]))
    multiFn = multiFn.update({ self: String })

    expect(fnCall(multiFn, testContext, 'foo', 'bar')).toBe('func1-foo-bar')
    expect(fnCall(multiFn, testContext, 'foo', 123)).toBe('func2-foo-123')
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
    const multiFn = fnsToMultiFn(ImmutableList([fn1, fn2, fn3]))
    const result = multiFn.dispatch(
      createContext({
        callee: this
      }),
      ['foo', 'bar'],
      { multi: true }
    )
    expect(result).toEqual(
      ImmutableList([
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
    )
  })
})
