import Any from '../types/Any'
import fnArity from './fnArity'

describe('fnArity', () => {
  test('sets arity of 0 with spread', () => {
    const func = fnArity((argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }, 0)
    expect(func.length).toBe(0)
    expect(func.parameters).toEqual([])
    expect(func('a', 'b', 'c')).toBe(0)
  })

  test('sets arity of 1 with spread', () => {
    const func = functionArity((argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 1
    }, 1)
    expect(func.length).toBe(1)
    expect(func.parameters).toEqual([{ name: 'argA', type: Any }])
    expect(func('a', 'b', 'c')).toBe(1)
  })

  test('sets arity greater than number of parameters in function', () => {
    const func = functionArity((argA) => {
      expect(argA).toBe('a')
      return 1
    }, 3)
    expect(func.length).toBe(3)
    expect(func.parameters).toEqual([
      { name: 'argA', type: Any },
      { name: 'arg1', type: Any },
      { name: 'arg2', type: Any }
    ])
    expect(func('a', 'b', 'c')).toBe(1)
  })

  test('should generate new function', () => {
    const func = (argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 1
    }
    const func1 = functionArity(func, 1)
    expect(func).not.toBe(func1)
    expect(func.length).toBe(3)
    expect(func1.length).toBe(1)
  })
})
