import hasUnicode from './hasUnicode'

describe('hasUnicode', () => {
  test('returns false for ascii only strings', () => {
    expect(hasUnicode('abc')).toBe(false)
  })

  test('returns false for diacritical marks', () => {
    expect(hasUnicode('æiou')).toBe(false)
  })

  test('returns true for strings with unicode characters', () => {
    expect(hasUnicode('\ud800foo')).toBe(true)
  })
})
