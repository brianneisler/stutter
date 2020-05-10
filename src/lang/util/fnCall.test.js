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
    expect(fnCall(fn, testContext, null, 'a', 'b', 'c')).toBe(0)
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
    expect(fnCall(fn[FN], testContext, null, 'a', 'b', 'c')).toBe(0)
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

  test('accepts self as second parameter', () => {
    const testContext = createContext({
      callee: this
    })
    const self = {}
    const func = function () {
      expect(arguments.length).toBe(0)
      expect(this).toBe(self)
      return 0
    }
    const fn = buildFn(func)
    expect(fnCall(fn, testContext, self)).toBe(0)
  })
})
