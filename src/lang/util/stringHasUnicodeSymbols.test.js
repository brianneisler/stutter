import stringHasUnicodeSymbols from './stringHasUnicodeSymbols'

describe('stringHasUnicodeSymbols', () => {
  test('returns false for ascii only strings', () => {
    expect(stringHasUnicodeSymbols('abc')).toBe(false)
  })

  test('returns false for diacritical marks', () => {
    expect(stringHasUnicodeSymbols('æiou')).toBe(false)
  })

  test('returns true for strings with unicode characters', () => {
    expect(stringHasUnicodeSymbols('\ud800foo')).toBe(true)
  })
})
