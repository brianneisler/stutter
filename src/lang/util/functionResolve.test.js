import functionResolve from './functionResolve'

describe('functionResolve', () => {
  test("Resolve a function's parameters before executing functions", async () => {
    const func = functionResolve((foo, bar) => {
      expect(foo).toBe('foo')
      expect(bar).toBe(123)
      return 'baz'
    })
    const result = func(Promise.resolve('foo'), 123)
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toBe('baz')
  })

  test('Remains sync when no resolvable values are found', () => {
    const func = functionResolve((foo, bar) => {
      expect(foo).toBe('foo')
      expect(bar).toBe(123)
      return 'baz'
    })
    const result = func('foo', 123)
    expect(result).toBe('baz')
  })

  test("Preserves a function's context", () => {
    const context = {}
    const func = function(foo, bar) {
      expect(this).toBe(context)
      return bar
    }
    const rFunc = functionResolve(func)
    expect(rFunc.call(context, 1, 2)).toBe(2)
  })
})
