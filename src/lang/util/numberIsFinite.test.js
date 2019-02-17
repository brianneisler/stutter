import numberIsFinite from './numberIsFinite'

describe('numberIsFinite', () => {
  test('returns true for finite numbers', () => {
    expect(numberIsFinite(123)).toBe(true)
    expect(numberIsFinite(1.23)).toBe(true)
    expect(numberIsFinite(0)).toBe(true)
    expect(numberIsFinite(-123)).toBe(true)
    expect(numberIsFinite(-1.23)).toBe(true)
  })

  test('returns flase for Infinity', () => {
    expect(numberIsFinite(Infinity)).toBe(false)
    expect(numberIsFinite(-Infinity)).toBe(false)
  })

  test('returns flase for NaN', () => {
    expect(numberIsFinite(NaN)).toBe(false)
  })
})
