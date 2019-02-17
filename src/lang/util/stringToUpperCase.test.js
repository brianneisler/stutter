import stringToUpperCase from './stringToUpperCase'

describe('stringToUpperCase', () => {
  test('converts upper case string to upper case', () => {
    expect(stringToUpperCase('abc')).toBe('ABC')
  })

  test('preserves upper case', () => {
    expect(stringToUpperCase('ABC')).toBe('ABC')
  })
})
