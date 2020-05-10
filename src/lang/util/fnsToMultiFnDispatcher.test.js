import { ErrorCode } from '../constants'
import Number from '../types/Number'
import String from '../types/String'
import createContext from './createContext'
import definitionToFn from './definitionToFn'
import fnsToMultiFnDispatcher from './fnsToMultiFnDispatcher'

describe('fnsToMultiFnDispatcher', () => {
  test('generates a simple multi function dipatcher', () => {
    const fn = definitionToFn(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const multiFnDipatcher = fnsToMultiFnDispatcher([fn])
    expect(multiFnDipatcher).toEqual({
      dispatch: expect.any(Function),
      getAllPossibleFns: expect.any(Function)
    })
  })

  test('throws a NO_MATCH error if no function is matched in a multi false and partial false dispatch', () => {
    const fn = definitionToFn(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const multiFnDipatcher = fnsToMultiFnDispatcher([fn])
    expect(() => {
      multiFnDipatcher.dispatch(
        createContext({
          callee: this
        }),
        [],
        { multi: false, partial: false }
      )
    }).toThrowMatchingObject({ code: ErrorCode.NO_MATCH })
  })

  test('returns the matched Fns in a multi true and partial true dispatch', () => {
    const fn1 = definitionToFn(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const fn2 = definitionToFn(
      (num, str) => {
        return str
      },
      [String, Number]
    )
    const fn3 = definitionToFn(
      (num, str) => {
        return str
      },
      [String, String]
    )
    const multiFnDipatcher = fnsToMultiFnDispatcher([fn1, fn2, fn3])
    const result = multiFnDipatcher.dispatch(
      createContext({
        callee: this
      }),
      ['foo'],
      { multi: true, partial: true }
    )
    expect(result).toEqual([
      { delta: -1, exact: false, fn: fn2, partial: true },
      { delta: -1, exact: false, fn: fn3, partial: true }
    ])
  })

  test('returns partial matches for multi true, partial true', () => {
    const fn1 = definitionToFn(
      (str1) => {
        return str1
      },
      [String]
    )
    const fn2 = definitionToFn(
      (str1, str2) => {
        return str2
      },
      [String, String]
    )
    const fn3 = definitionToFn(
      (str1, str2, str3) => {
        return str3
      },
      [String, String, String]
    )
    const multiFnDipatcher = fnsToMultiFnDispatcher([fn1, fn2, fn3])
    const result = multiFnDipatcher.dispatch(
      createContext({
        callee: this
      }),
      ['foo', 'bar'],
      { multi: true, partial: true }
    )
    expect(result).toEqual([
      { delta: 1, exact: false, fn: fn1, partial: false },
      { delta: 0, exact: true, fn: fn2, partial: false },
      { delta: -1, exact: false, fn: fn3, partial: true }
    ])
  })

  test('Does not return partial matches for multi true, partial false', () => {
    const fn1 = definitionToFn(
      (str1) => {
        return str1
      },
      [String]
    )
    const fn2 = definitionToFn(
      (str1, str2) => {
        return str2
      },
      [String, String]
    )
    const fn3 = definitionToFn(
      (str1, str2, str3) => {
        return str3
      },
      [String, String, String]
    )
    const fn4 = definitionToFn(
      (str1, str2, str3, str4) => {
        return str4
      },
      [String, String, String, String]
    )
    const multiFnDipatcher = fnsToMultiFnDispatcher([fn1, fn2, fn3, fn4])
    const result = multiFnDipatcher.dispatch(
      createContext({
        callee: this
      }),
      ['foo', 'bar', 'baz'],
      { multi: true, partial: false }
    )
    expect(result).toEqual([
      { delta: 2, exact: false, fn: fn1, partial: false },
      { delta: 1, exact: false, fn: fn2, partial: false },
      { delta: 0, exact: true, fn: fn3, partial: false }
    ])
  })
})
