import Number from '../types/Number'
import String from '../types/String'
import functionDefineTypes from './functionDefineTypes'
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

  test("Preserves a function's parameters", () => {
    const func = functionDefineTypes((foo, bar) => bar, [String, Number])
    const rFunc = functionResolve(func)
    expect(rFunc.parameters).toEqual([{ name: 'foo', type: String }, { name: 'bar', type: Number }])
    expect(rFunc.length).toBe(2)
  })
})
