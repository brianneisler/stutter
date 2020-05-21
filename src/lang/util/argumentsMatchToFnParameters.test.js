import { FN } from '../constants/Symbol'
import FUNCTIONAL_PLACEHOLDER from '../constants/FUNCTIONAL_PLACEHOLDER'
import Number from '../types/Number'
import Parameter from './js/Parameter'
import Self from '../types/Self'
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
    const result = argumentsMatchToFnParameters([123, 'foo'], fn, {
      partial: false
    })
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
    const result = argumentsMatchToFnParameters(['abc', 'foo'], fn, {
      partial: false
    })
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

  test('returns negative delta when missing an arg', () => {
    const fn = definitionToFn(
      (num1, num2) => {
        return num2
      },
      [Number, Number]
    )
    const result = argumentsMatchToFnParameters([123], fn, { partial: true })
    expect(result.delta).toBe(-1)
  })

  test('returns delta of 0 when exact match of arguments', () => {
    const fn = definitionToFn(
      (num1, num2) => {
        return num2
      },
      [Number, Number]
    )
    const result = argumentsMatchToFnParameters([123, 456], fn, {
      partial: true
    })
    expect(result.delta).toBe(0)
  })

  test('returns positive delta when exact match of arguments', () => {
    const fn = definitionToFn(
      (num1, num2) => {
        return num2
      },
      [Number, Number]
    )
    const result = argumentsMatchToFnParameters([123, 456, 789], fn, {
      partial: true
    })
    expect(result.delta).toBe(1)
  })

  test('returns negative delta, partial and non-exact match when placeholders are received for arguments', () => {
    const fn = definitionToFn(
      (num1, num2) => {
        return num2
      },
      [Number, Number]
    )
    const result = argumentsMatchToFnParameters(
      [FUNCTIONAL_PLACEHOLDER, FUNCTIONAL_PLACEHOLDER],
      fn,
      { partial: true }
    )
    expect(result).toEqual({
      delta: -2,
      exact: false,
      fn,
      partial: true
    })
  })

  test('returns match when argument matches the Self type', () => {
    let fn = definitionToFn(
      (str) => {
        return str
      },
      [Self]
    )
    fn = fn.update({ self: String }, { dispatch: true })
    const result = argumentsMatchToFnParameters(['foo'], fn, { partial: true })
    expect(result).toEqual({
      delta: 0,
      exact: true,
      fn,
      partial: false
    })
  })

  test('Handles a curried Fn', () => {
    let fn = definitionToFn(
      (num1, num2) => {
        return num2
      },
      [Number, Number, () => Number]
    )
    fn = fn.update({ curry: true })
    fn = fn(123)
    expect(fn[FN].meta).toEqual({
      curried: {
        parameters: [new Parameter('num2', Number)],
        placeholders: [],
        received: [123]
      },
      curry: true,
      parameters: [
        new Parameter('num1', Number),
        new Parameter('num2', Number)
      ],
      returns: Number
    })

    const result = argumentsMatchToFnParameters([456], fn, { partial: true })
    expect(result).toEqual({
      delta: 0,
      exact: true,
      fn,
      partial: false
    })
  })

  test('throws an error when fn does not have parameters ', () => {
    const fn = buildFn(() => {})
    expect(() =>
      argumentsMatchToFnParameters([123], fn, { multi: false, partial: false })
    ).toThrowMatchingObject({
      type: 'Expected:Fn:toHaveParameters'
    })
  })
})
