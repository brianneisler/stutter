import definitionsToFn from './definitionsToFn'

describe('definitionsToFn', () => {
  it('resolves async values when executed', async () => {
    const foo = definitionsToFn([
      (arg) => {
        expect(arg).toBe('foo')
        return arg
      }
    ])
    const result = foo(Promise.resolve('foo'))
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toBe('foo')
  })
})
