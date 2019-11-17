import functionArity from './functionArity'

describe('functionArity', () => {
  test('sets arity of 0', () => {
    const func = functionArity((argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }, 0)
    expect(func.length).toBe(0)
    expect(func('a', 'b', 'c')).toBe(0)
  })

  test('sets arity of 1', () => {
    const func = functionArity((argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }, 1)
    expect(func.length).toBe(1)
    expect(func('a', 'b', 'c')).toBe(0)
  })

  test('sets arity of 2', () => {
    const func = functionArity((argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }, 2)
    expect(func.length).toBe(2)
    expect(func('a', 'b', 'c')).toBe(0)
  })

  test('sets arity of 3', () => {
    const func = functionArity((argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }, 3)
    expect(func.length).toBe(3)
    expect(func('a', 'b', 'c')).toBe(0)
  })

  test('sets arity of 4', () => {
    const func = functionArity((argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }, 4)
    expect(func.length).toBe(4)
    expect(func('a', 'b', 'c')).toBe(0)
  })
})
