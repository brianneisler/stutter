import anyIsPlaceholder from './anyIsPlaceholder'

describe('anyIsPlaceholder', () => {
  test('returns true for Placeholder', () => {
    expect(
      anyIsPlaceholder({
        '@@functional/placeholder': true
      })
    ).toBe(true)
  })

  test('returns false when value is not true', () => {
    expect(
      anyIsPlaceholder({
        '@@functional/placeholder': false
      })
    ).toBe(false)
  })

  test('returns false for all other values', () => {
    expect(anyIsPlaceholder(null)).toBe(false)
    expect(anyIsPlaceholder(undefined)).toBe(false)
    expect(anyIsPlaceholder('')).toBe(false)
    expect(anyIsPlaceholder('abc')).toBe(false)
    expect(anyIsPlaceholder(false)).toBe(false)
    expect(anyIsPlaceholder(true)).toBe(false)
    expect(anyIsPlaceholder(0)).toBe(false)
    expect(anyIsPlaceholder(-1)).toBe(false)
    expect(anyIsPlaceholder(1)).toBe(false)
    expect(anyIsPlaceholder(NaN)).toBe(false)
    expect(anyIsPlaceholder(Infinity)).toBe(false)
    expect(anyIsPlaceholder(-Infinity)).toBe(false)
    expect(anyIsPlaceholder([])).toBe(false)
    expect(anyIsPlaceholder({})).toBe(false)
    expect(anyIsPlaceholder(() => {})).toBe(false)
  })
})
