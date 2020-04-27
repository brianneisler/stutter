import functionsPipe from './functionsPipe'

describe('functionsPipe', () => {
  test('executes functions in left to right order', () => {
    const method = functionsPipe(
      (val) => val + 'foo',
      (val) => val + 'bar'
    )
    expect(method('')).toBe('foobar')
  })

  test('pipes non async functions and returns value', () => {
    const method = functionsPipe(
      (val) => val + 1,
      (val) => val + 2
    )
    expect(method(1)).toBe(4)
  })

  test('pipes async functions and returns value', async () => {
    const method = functionsPipe(
      async (val) => new Promise((resolve) => setTimeout(() => resolve(val + 1), 0)),
      (val) => val + 2
    )
    const result = method(1)
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toBe(4)
  })
})
