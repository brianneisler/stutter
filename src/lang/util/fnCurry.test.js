import definitionToFn from './definitionToFn'
import fnCurry from './fnCurry'

describe('fnCurr', () => {
  test('curry basic Fn of 1 Paramters', () => {
    const fn = fnCurry(
      definitionToFn((argA) => {
        expect(argA).toBe('a')
        return 0
      })
    )
    expect(fn('a')).toBe(0)
  })

  test('curry Fn of 2 Parameters', () => {
    const fn = fnCurry(
      definitionToFn((argA, argB) => {
        expect(argA).toBe('a')
        expect(argB).toBe('b')
        return 0
      })
    )
    expect(fn('a', 'b')).toBe(0)
    expect(fn('a')('b')).toBe(0)
  })

  test('curry Fn of 3 parameters', () => {
    const fn = fnCurry(
      definitionToFn((argA, argB, argC) => {
        expect(argA).toBe('a')
        expect(argB).toBe('b')
        expect(argC).toBe('c')
        return 0
      })
    )
    expect(fn('a', 'b', 'c')).toBe(0)
    expect(fn('a', 'b')('c')).toBe(0)
    expect(fn('a')('b', 'c')).toBe(0)
    expect(fn('a')('b')('c')).toBe(0)
  })

  test('curry of arity 4 should curry method', () => {
    const fn = fnCurry(
      definitionToFn((argA, argB, argC, argD) => {
        expect(argA).toBe('a')
        expect(argB).toBe('b')
        expect(argC).toBe('c')
        expect(argD).toBe('d')
        return 0
      })
    )
    expect(fn('a', 'b', 'c', 'd')).toBe(0)
    expect(fn('a', 'b', 'c')('d')).toBe(0)
    expect(fn('a', 'b')('c', 'd')).toBe(0)
    expect(fn('a', 'b')('c')('d')).toBe(0)
    expect(fn('a')('b', 'c', 'd')).toBe(0)
    expect(fn('a')('b', 'c')('d')).toBe(0)
    expect(fn('a')('b')('c', 'd')).toBe(0)
    expect(fn('a')('b')('c')('d')).toBe(0)
  })

  test('currried Fn should preserve additional arguments', () => {
    const fn = fnCurry(
      definitionToFn((argA, argB, argC) => {
        expect(argA).toBe('a')
        expect(argB).toBe('b')
        expect(argC).toBe('c')
        return 0
      })
    )
    expect(fn('a', 'b', 'c')).toBe(0)
  })

  test('curried Fn should preserve arity', () => {
    const fn0 = fnCurry(definitionToFn(() => {}))
    expect(fn0.length).toBe(0)

    const fn1 = fnCurry(definitionToFn((arg1) => arg1))
    expect(fn1.length).toBe(1)

    const fn2 = fnCurry(definitionToFn((arg1, arg2) => arg2))
    expect(fn2.length).toBe(2)

    const fn3 = fnCurry(definitionToFn((arg1, arg2, arg3) => arg3))
    expect(fn3.length).toBe(3)
  })
})
