import { FN } from '../constants/Symbol'
import createContext from './createContext'
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
    expect(
      fnApply(
        fn,
        createContext({
          callee: this
        }),
        ['a', 'b', 'c']
      )
    ).toBe(0)
  })

  test('executes if given the Fn class directly', () => {
    const func = (argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }
    const fn = definitionToFn(func)
    expect(
      fnApply(
        fn[FN],
        createContext({
          callee: this
        }),
        ['a', 'b', 'c']
      )
    ).toBe(0)
  })

  test('defaults jsContext to null and arguments to empty array', () => {
    const func = function () {
      expect(arguments.length).toBe(0)
      expect(this).toBe(null)
      return 0
    }
    const fn = definitionToFn(func)
    expect(
      fnApply(
        fn,
        createContext({
          callee: this
        })
      )
    ).toBe(0)
  })

  test('accepts self as jsContext in Context parameter', () => {
    const self = {}
    const func = function () {
      expect(arguments.length).toBe(0)
      expect(this).toBe(self)
      return 0
    }
    const fn = definitionToFn(func)
    expect(
      fnApply(
        fn,
        createContext({
          callee: this,
          jsContext: self
        })
      )
    ).toBe(0)
  })
})
