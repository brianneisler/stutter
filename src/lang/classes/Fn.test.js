import Any from '../types/Any'

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
    const fn = new Fn(() => {}, {})
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

  test('if meta has not changed, update should return the same Fn', () => {
    const parameters = [new Parameter('argA', Any)]
    const fn = new Fn(() => {}, {
      parameters
    })

    const updatedFn = fn.update({
      parameters
    })

    expect(updatedFn).toBe(fn)
  })
})
