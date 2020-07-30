import resolveToResolver from './resolveToResolver'

describe('resolveToResolver', () => {
  test('returns a resolver', () => {
    const resolver = resolveToResolver('foo')
    expect(resolver.next).toBeInstanceOf(Function)
    expect(resolver.throw).toBeInstanceOf(Function)
    expect(resolver.promise).toBeInstanceOf(Promise)
  })

  test('resolves to the given value and resolves promise with value', async () => {
    const resolver = resolveToResolver('foo')
    expect(resolver.next()).toEqual({
      done: true,
      value: 'foo'
    })
    const result = await resolver.promise
    expect(result).toBe('foo')
  })

  test('thrown value is pushed as a rejection into promise', async () => {
    const generatorFunc = function* () {
      throw new Error('foobar')
    }
    const resolver = resolveToResolver(generatorFunc())
    resolver.next()
    await expect(resolver.promise).rejects.toEqual(new Error('foobar'))
  })
})
