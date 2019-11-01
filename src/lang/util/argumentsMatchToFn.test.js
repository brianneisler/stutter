import Number from '../types/Number'
import String from '../types/String'
import argumentsMatchToFn from './argumentsMatchToFn'
import buildFn from './buildFn'

describe('argumentsMatchToFn', () => {
  test('returns match object when arguments are a match', () => {
    const fn = buildFn(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const result = argumentsMatchToFn([123, 'foo'], fn, { partial: false })
    expect(result).toEqual({
      fn,
      partial: false
    })
  })

  test('returns false when arguments are not a match', () => {
    const fn = buildFn(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const result = argumentsMatchToFn(['abc', 'foo'], fn, { partial: false })
    expect(result).toBe(false)
  })

  test('returns false when not enough arguments and partial is false', () => {
    const fn = buildFn(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const result = argumentsMatchToFn([123], fn, { partial: false })
    expect(result).toBe(false)
  })

  test('returns match object when not enough arguments and partial is true', () => {
    const fn = buildFn(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const result = argumentsMatchToFn([123], fn, { partial: true })
    expect(result).toEqual({
      fn,
      partial: true
    })
  })
})
