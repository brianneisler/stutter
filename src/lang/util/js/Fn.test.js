import { FN } from '../../constants/Symbol'
import Any from '../../types/Any'
import Fn from './Fn'
import Parameter from './Parameter'

describe('js:Fn', () => {
  describe('constructor', () => {
    test('correctly constructs the Fn instance', () => {
      const func = () => {}
      const instance = new Fn(func, {})
      expect(instance).toBeInstanceOf(Fn)
      expect(instance.func).toBe(func)
      expect(instance.meta).toEqual({})
      expect(instance.handler).toBeInstanceOf(Function)
    })
  })

  test('updates parameters from empty value', () => {
    const fn = Fn.build(() => {})
    const result = fn.update({
      parameters: [new Parameter('argA', Any), new Parameter('argB', Any)]
    })
    expect(fn.parameters).toBe(undefined)
    expect(result).not.toBe(fn)
    expect(result.parameters).toEqual([
      new Parameter('argA', Any),
      new Parameter('argB', Any)
    ])
  })

  test('defines the @@fn symbol', () => {
    const fn = Fn.build((argA, argB) => {
      return argB
    })
    expect(fn[FN]).toBeInstanceOf(Fn)
  })
})
