import anyResolveAll from './anyResolveAll'

describe('anyResolveAll', () => {
  test("resolves a Promise to its value and then resolves the value's values", async () => {
    const result = await anyResolveAll(
      Promise.resolve(['a', Promise.resolve('b'), (async () => 'c')(), { resolve: () => 'd' }])
    )

    expect(result).toEqual(['a', 'b', 'c', 'd'])
  })

  test('resolves all async values in arguments', async () => {
    const args = (function() {
      return arguments
    })('a', Promise.resolve('b'), (async () => 'c')(), { resolve: () => 'd' })
    const result = await anyResolveAll(args)

    expect(result).toEqual(['a', 'b', 'c', 'd'])
  })

  test('resolves all async values in an array', async () => {
    const result = await anyResolveAll([
      'a',
      Promise.resolve('b'),
      (async () => 'c')(),
      { resolve: () => 'd' }
    ])

    expect(result).toEqual(['a', 'b', 'c', 'd'])
  })

  test('resolves all async values in an object', async () => {
    const result = await anyResolveAll({
      a: 1,
      b: Promise.resolve(2),
      c: (async () => 3)(),
      d: { resolve: () => 4 }
    })

    expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 })
  })

  test('resolves non async values in an object', async () => {
    const result = await anyResolveAll({
      a: 1,
      b: { resolve: () => 2 }
    })

    expect(result).toEqual({ a: 1, b: 2 })
  })

  test('resolves any other value to itself', () => {
    expect(anyResolveAll(undefined)).toBe(undefined)
    expect(anyResolveAll(null)).toBe(null)
    expect(anyResolveAll('')).toBe('')
    expect(anyResolveAll('abc')).toBe('abc')
    expect(anyResolveAll(false)).toBe(false)
    expect(anyResolveAll(true)).toBe(true)
    expect(anyResolveAll(0)).toBe(0)
    expect(anyResolveAll(-1)).toBe(-1)
    expect(anyResolveAll(1)).toBe(1)
    expect(anyResolveAll(NaN)).toBe(NaN)
    expect(anyResolveAll(Infinity)).toBe(Infinity)
    expect(anyResolveAll(-Infinity)).toBe(-Infinity)
    const fn = () => {}
    expect(anyResolveAll(fn)).toBe(fn)
  })
})
