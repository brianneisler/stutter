import stringIsAsciiString from './stringIsAsciiString'

describe('stringIsAsciiString', () => {
  test('returns true for ascii only strings', () => {
    expect(stringIsAsciiString('')).toBe(true)
    expect(stringIsAsciiString('abc')).toBe(true)
  })

  test('returns false for as string with diacritical marks', () => {
    expect(stringIsAsciiString('æiou')).toBe(false)
  })

  test('returns false for strings with unicode characters', () => {
    expect(stringIsAsciiString('\ud800foo')).toBe(false)
  })
})
