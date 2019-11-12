import Number from '../types/Number'
import String from '../types/String'
import argumentsMatchToFnParameters from './argumentsMatchToFnParameters'
import buildFn from './buildFn'
import definitionToFn from './definitionToFn'

describe('argumentsMatchToFnParameters', () => {
  test('returns match object when arguments are a match', () => {
    const fn = definitionToFn(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const result = argumentsMatchToFnParameters([123, 'foo'], fn, { partial: false })
    expect(result).toEqual({
      delta: 0,
      exact: true,
      fn,
      partial: false
    })
  })

  test('returns false when arguments are not a match', () => {
    const fn = definitionToFn(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const result = argumentsMatchToFnParameters(['abc', 'foo'], fn, { partial: false })
    expect(result).toBe(false)
  })

  test('returns false when not enough arguments and partial is false', () => {
    const fn = definitionToFn(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const result = argumentsMatchToFnParameters([123], fn, { partial: false })
    expect(result).toBe(false)
  })

  test('returns match object when not enough arguments and partial is true', () => {
    const fn = definitionToFn(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const result = argumentsMatchToFnParameters([123], fn, { partial: true })
    expect(result).toEqual({
      delta: -1,
      exact: false,
      fn,
      partial: true
    })
  })

  test('throws an error when fn does not have parameters ', () => {
    const fn = buildFn(() => {})
    expect(() =>
      argumentsMatchToFnParameters([123], fn, { multi: false, partial: false })
    ).toThrowError(/^parameter 'fn' must be a parameterized/)
  })
})
