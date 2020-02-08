import functionMemoizeWith from './functionMemoizeWith'

describe('functionMemoizeWith', () => {
  test('memoizes a function with given method', () => {
    let count = 0
    const cacheFn = jest.fn((arg) => arg)
    const fn = functionMemoizeWith((value) => {
      count += 1
      return value
    }, cacheFn)
    const object = {}
    fn(object)
    const result = fn(object)
    expect(result).toBe(object)
    expect(count).toBe(1)
    expect(cacheFn).toHaveBeenNthCalledWith(1, object)
    expect(cacheFn).toHaveBeenNthCalledWith(2, object)
  })

  test('preserves arity of function', () => {
    const fn0 = functionMemoizeWith(
      () => null,
      () => ({})
    )
    expect(fn0.length).toBe(0)
    const fn1 = functionMemoizeWith(
      (n) => n,
      () => ({})
    )
    expect(fn1.length).toBe(1)
    const fn2 = functionMemoizeWith(
      (n1, n2) => n2,
      () => ({})
    )
    expect(fn2.length).toBe(2)
  })
})
