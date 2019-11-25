import anyToPositiveInteger from './anyToPositiveInteger'

describe('anyToanyToPositiveIntegerInteger', () => {
  test('converts number to integer', () => {
    expect(anyToPositiveInteger(3.2)).toBe(3)
  })

  test('converts number to integer', () => {
    expect(anyToPositiveInteger(-4)).toBe(4)
  })

  test('converts MIN_VALUE to 0', () => {
    expect(anyToPositiveInteger(Number.MIN_VALUE)).toBe(0)
  })

  test('converts Infinity to 1.7976931348623157e+308', () => {
    expect(anyToPositiveInteger(Infinity)).toBe(1.7976931348623157e308)
  })

  test('converts string to integer', () => {
    expect(anyToPositiveInteger('3.2')).toBe(3)
  })
})
