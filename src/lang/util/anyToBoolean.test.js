import anyToBoolean from './anyToBoolean'

describe('anyToBoolean', () => {
  it('converts positive and negative numbers to true', () => {
    expect(anyToBoolean(3.2)).toBe(true)
    expect(anyToBoolean(3)).toBe(true)
    expect(anyToBoolean(-3.2)).toBe(true)
    expect(anyToBoolean(-3)).toBe(true)
  })

  it('converts non-empty string to true', () => {
    expect(anyToBoolean('foo')).toBe(true)
  })

  it('converts empty array to true', () => {
    expect(anyToBoolean([])).toBe(true)
  })

  it('converts empty object to true', () => {
    expect(anyToBoolean({})).toBe(true)
  })

  it('converts null to false', () => {
    expect(anyToBoolean(null)).toBe(false)
  })

  it('converts undefined to false', () => {
    expect(anyToBoolean(undefined)).toBe(false)
  })

  it('converts 0 and -0 to false', () => {
    expect(anyToBoolean(0)).toBe(false)
    expect(anyToBoolean(-0)).toBe(false)
  })

  it('converts NaN to false', () => {
    expect(anyToBoolean(NaN)).toBe(false)
  })

  it('converts empty string to false', () => {
    expect(anyToBoolean('')).toBe(false)
  })

  it('converts Infinity true', () => {
    expect(anyToBoolean(Infinity)).toBe(true)
  })
})
