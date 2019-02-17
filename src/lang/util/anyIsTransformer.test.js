import anyIsTransformer from './anyIsTransformer'

describe('anyIsTransformer', () => {
  test('identifies a transformer from basic object', () => {
    const testTransformer = {
      ['@@transducer/step']: () => {}
    }
    expect(anyIsTransformer(testTransformer)).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsTransformer(undefined)).toBe(false)
    expect(anyIsTransformer(null)).toBe(false)
    expect(anyIsTransformer('')).toBe(false)
    expect(anyIsTransformer('abc')).toBe(false)
    expect(anyIsTransformer(false)).toBe(false)
    expect(anyIsTransformer(true)).toBe(false)
    expect(anyIsTransformer(0)).toBe(false)
    expect(anyIsTransformer(-1)).toBe(false)
    expect(anyIsTransformer(1)).toBe(false)
    expect(anyIsTransformer(NaN)).toBe(false)
    expect(anyIsTransformer(Infinity)).toBe(false)
    expect(anyIsTransformer(-Infinity)).toBe(false)
    expect(anyIsTransformer([])).toBe(false)
    expect(anyIsTransformer({})).toBe(false)
    expect(anyIsTransformer(() => {})).toBe(false)
  })
})
