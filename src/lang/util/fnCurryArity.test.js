import fnCurryArity from './fnCurryArity'

describe('fnCurryArity', () => {
  test('curry of arity 1 should curry method', () => {
    const func = fnCurryArity((argA) => {
      expect(argA).toBe('a')
      return 0
    }, 1)
    expect(func('a')).toBe(0)
  })

  test('curry of arity 2 should curry method', () => {
    const func = fnCurryArity((argA, argB) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      return 0
    }, 2)
    expect(func('a', 'b')).toBe(0)
    expect(func('a')('b')).toBe(0)
  })

  test('curry of arity 3 should curry method', () => {
    const func = fnCurryArity((argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }, 3)
    expect(func('a', 'b', 'c')).toBe(0)
    expect(func('a', 'b')('c')).toBe(0)
    expect(func('a')('b', 'c')).toBe(0)
    expect(func('a')('b')('c')).toBe(0)
  })

  test('curry of arity 4 should curry method', () => {
    const func = fnCurryArity((argA, argB, argC, argD) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      expect(argD).toBe('d')
      return 0
    }, 4)
    expect(func('a', 'b', 'c', 'd')).toBe(0)
    expect(func('a', 'b', 'c')('d')).toBe(0)
    expect(func('a', 'b')('c', 'd')).toBe(0)
    expect(func('a', 'b')('c')('d')).toBe(0)
    expect(func('a')('b', 'c', 'd')).toBe(0)
    expect(func('a')('b', 'c')('d')).toBe(0)
    expect(func('a')('b')('c', 'd')).toBe(0)
    expect(func('a')('b')('c')('d')).toBe(0)
  })

  test('currried function should preserve additional arguments', () => {
    const func = fnCurryArity((argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }, 1)
    expect(func('a', 'b', 'c')).toBe(0)
  })

  test('curried function should have arity set to given number regardless of number of parameters', () => {
    const func0 = fnCurryArity(() => {}, 1)
    expect(func0.length).toBe(1)

    const func1 = fnCurryArity((arg1) => arg1, 1)
    expect(func1.length).toBe(1)

    const func2 = fnCurryArity((arg1, arg2) => arg2, 1)
    expect(func2.length).toBe(1)

    const func3 = fnCurryArity((arg1, arg2, arg3) => arg3, 2)
    expect(func3.length).toBe(2)
  })
})
