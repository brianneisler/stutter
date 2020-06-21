import Any from '../types/Any'
import Parameter from '../classes/Parameter'
import definitionToFn from './definitionToFn'
import fnArity from './fnArity'

describe('fnArity', () => {
  test('sets arity of 0 with spread', () => {
    const fn = fnArity(
      definitionToFn((argA, argB, argC) => {
        expect(argA).toBe('a')
        expect(argB).toBe('b')
        expect(argC).toBe('c')
        return 0
      }),
      0
    )
    expect(fn.length).toBe(0)
    expect(fn.parameters).toEqual([])
    expect(fn('a', 'b', 'c')).toBe(0)
  })

  test('sets arity of 1 with spread', () => {
    const fn = fnArity(
      definitionToFn((argA, argB, argC) => {
        expect(argA).toBe('a')
        expect(argB).toBe('b')
        expect(argC).toBe('c')
        return 1
      }),
      1
    )
    expect(fn.length).toBe(1)
    expect(fn.parameters).toEqual([new Parameter('argA', Any)])
    expect(fn('a', 'b', 'c')).toBe(1)
  })

  test('sets arity greater than number of Parameters in Fn', () => {
    const fn = fnArity(
      definitionToFn((argA) => {
        expect(argA).toBe('a')
        return 1
      }),
      3
    )
    expect(fn.length).toBe(3)
    expect(fn.parameters).toEqual([
      new Parameter('argA', Any),
      new Parameter('arg1', Any),
      new Parameter('arg2', Any)
    ])
    expect(fn('a', 'b', 'c')).toBe(1)
  })

  test('should generate new Fn', () => {
    const fn = definitionToFn((argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 1
    })
    const fn1 = fnArity(fn, 1)
    expect(fn).not.toBe(fn1)
    expect(fn.length).toBe(3)
    expect(fn1.length).toBe(1)
  })
})
