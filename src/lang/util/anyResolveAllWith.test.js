import anyResolveAllWith from './anyResolveAllWith'

describe('anyResolveAllWith', () => {
  test('resolves basic values with sync identity function to themselves', () => {
    expect(anyResolveAllWith(0, (value) => value)).toBe(0)
    expect(anyResolveAllWith(1, (value) => value)).toBe(1)
    expect(anyResolveAllWith(-1, (value) => value)).toBe(-1)
    expect(anyResolveAllWith('', (value) => value)).toBe('')
    expect(anyResolveAllWith('abc', (value) => value)).toBe('abc')
    expect(anyResolveAllWith(null, (value) => value)).toBe(null)
    expect(anyResolveAllWith(undefined, (value) => value)).toBe(undefined)
    expect(anyResolveAllWith(true, (value) => value)).toBe(true)
    expect(anyResolveAllWith(false, (value) => value)).toBe(false)
    expect(anyResolveAllWith([], (value) => value)).toEqual([])
    expect(anyResolveAllWith({}, (value) => value)).toEqual({})
  })

  test('resolves Promise to a Promise', async () => {
    const promise = new Promise((pResolve) => {
      pResolve('foo')
    })
    const handler = jest.fn(() => 'bar')
    const resolver = anyResolveAllWith(promise, handler)
    expect(resolver).toBeInstanceOf(Promise)
    const result = await resolver
    expect(handler).toHaveBeenCalledWith('foo')
    expect(handler).toHaveBeenCalledTimes(1)
    expect(result).toBe('bar')
  })
})
