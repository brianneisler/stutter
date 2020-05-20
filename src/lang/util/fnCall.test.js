import { FN } from '../constants/Symbol'
import buildFn from './buildFn'
import createContext from './createContext'
import fnCall from './fnCall'

describe('fnCall', () => {
  test('calls the given Fn', () => {
    const testContext = createContext({
      callee: this
    })
    const func = (argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }
    const fn = buildFn(func)
    expect(fnCall(fn, testContext, 'a', 'b', 'c')).toBe(0)
  })

  test('executes if given the Fn class directly', () => {
    const testContext = createContext({
      callee: this
    })
    const func = (argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }
    const fn = buildFn(func)
    expect(fnCall(fn[FN], testContext, 'a', 'b', 'c')).toBe(0)
  })

  test('defaults context to null and arguments to empty array', () => {
    const testContext = createContext({
      callee: this
    })
    const func = function () {
      expect(arguments.length).toBe(0)
      expect(this).toBe(null)
      return 0
    }
    const fn = buildFn(func)
    expect(fnCall(fn, testContext)).toBe(0)
  })

  test('sets js execution context from Context.jsContext', () => {
    const self = {}
    const testContext = createContext({
      callee: this,
      jsContext: self
    })
    const func = function () {
      expect(arguments.length).toBe(0)
      expect(this).toBe(self)
      return 0
    }
    const fn = buildFn(func)
    expect(fnCall(fn, testContext)).toBe(0)
  })
})
