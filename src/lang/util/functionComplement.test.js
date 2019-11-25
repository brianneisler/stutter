import functionComplement from './functionComplement'

describe('functionComplement', () => {
  test('complements a basic function', () => {
    const func = functionComplement((n) => n)

    expect(func(true)).toBe(false)
    expect(func(false)).toBe(true)
  })

  test('twos complement a basic function', () => {
    const func = functionComplement((n) => n, 2)

    expect(func(true)).toBe(true)
    expect(func(false)).toBe(false)
    expect(func({})).toBe(true)
    expect(func('foo')).toBe(true)
  })
})
