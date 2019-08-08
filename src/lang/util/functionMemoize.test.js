import Any from '../types/Any'
import Number from '../types/Number'
import functionDefineTypes from './functionDefineTypes'
import functionMemoize from './functionMemoize'

describe('functionMemoize', () => {
  test('memoizes a function', () => {
    let count = 0
    const fn = functionMemoize((n) => {
      count += 1
      return n
    })
    fn(5)
    fn(5)
    fn(5)
    expect(count).toBe(1)
  })

  test('preserves arity of function', () => {
    const fn0 = functionMemoize(() => null)
    expect(fn0.length).toBe(0)
    const fn1 = functionMemoize((n) => n)
    expect(fn1.length).toBe(1)
    const fn2 = functionMemoize((n1, n2) => n2)
    expect(fn2.length).toBe(2)
  })

  test('preserves parameters and return type of function', () => {
    const func = functionDefineTypes(
      (foo, bar) => {
        return bar
      },
      [Any, Number, () => Number]
    )
    const mFunc = functionMemoize(func)

    expect(mFunc.length).toBe(2)
    expect(mFunc.parameters).toEqual([{ name: 'foo', type: Any }, { name: 'bar', type: Number }])
    expect(mFunc.returns).toEqual(Number)
  })
})
