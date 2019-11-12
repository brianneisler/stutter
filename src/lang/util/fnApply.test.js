import SYMBOL_FN from '../constants/SYMBOL_FN'
import definitionToFn from './definitionToFn'
import fnApply from './fnApply'

describe('fnApply', () => {
  test('applies the given Fn', () => {
    const func = (argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }
    const fn = definitionToFn(func)
    expect(fnApply(fn, null, ['a', 'b', 'c'])).toBe(0)
  })

  test('executes if given the Fn class directly', () => {
    const func = (argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }
    const fn = definitionToFn(func)
    expect(fnApply(fn[SYMBOL_FN], null, ['a', 'b', 'c'])).toBe(0)
  })

  test('defaults context to null and arguments to empty array', () => {
    const func = function() {
      expect(arguments.length).toBe(0)
      expect(this).toBe(null)
      return 0
    }
    const fn = definitionToFn(func)
    expect(fnApply(fn)).toBe(0)
  })

  test('accepts context as second parameter', () => {
    const context = {}
    const func = function() {
      expect(arguments.length).toBe(0)
      expect(this).toBe(context)
      return 0
    }
    const fn = definitionToFn(func)
    expect(fnApply(fn, context)).toBe(0)
  })
})
