import Number from '../types/Number'
import String from '../types/String'
import argumentsMatchToFunction from './argumentsMatchToFunction'
import functionTypify from './functionTypify'

describe('argumentsMatchToFunction', () => {
  test('returns match object when arguments are a match', () => {
    const func = functionTypify(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const result = argumentsMatchToFunction([123, 'foo'], func, { partial: false })
    expect(result).toEqual({
      func,
      partial: false
    })
  })

  test('returns false when arguments are not a match', () => {
    const func = functionTypify(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const result = argumentsMatchToFunction(['abc', 'foo'], func, { partial: false })
    expect(result).toBe(false)
  })

  test('returns false when not enough arguments and partial is false', () => {
    const func = functionTypify(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const result = argumentsMatchToFunction([123], func, { partial: false })
    expect(result).toBe(false)
  })

  test('returns match object when not enough arguments and partial is true', () => {
    const func = functionTypify(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const result = argumentsMatchToFunction([123], func, { partial: true })
    expect(result).toEqual({
      func,
      partial: true
    })
  })
})
