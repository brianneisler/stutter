import Any from '../types/Any'
import Parameter from '../classes/Parameter'
import buildException from './buildException'
import functionHandleExceptions from './functionHandleExceptions'

describe('functionHandleExceptions', () => {
  test('converts exceptions into errors and rethrows them', () => {
    const func = functionHandleExceptions((arg1) => {
      throw buildException(func)
        .expected.arg(arg1, 0)
        .toMatchParameter(new Parameter('arg1', Any))
    })
    expect(() => func('foo')).toThrow(TypeError)
  })

  test('converts exceptions into errors and rethrows them in an async function', async () => {
    const func = functionHandleExceptions(async (arg1) => {
      throw buildException(func)
        .expected.arg(arg1, 0)
        .toMatchParameter(new Parameter('arg1', Any))
    })
    await expect(func('foo')).rejects.toBeInstanceOf(TypeError)
  })

  test('converts exceptions into errors and rethrows them in a generator function', () => {
    const func = functionHandleExceptions(function* (arg1) {
      throw buildException(func)
        .expected.arg(arg1, 0)
        .toMatchParameter(new Parameter('arg1', Any))
    })
    expect(() => {
      const generator = func('foo')
      generator.next()
    }).toThrow(TypeError)
  })

  test('preserves context of plain function', () => {
    const context = {}
    const func = functionHandleExceptions(function (arg1) {
      expect(this).toBe(context)
      return arg1
    })
    expect(func.call(context, 1)).toBe(1)
  })

  test('preserves context of async function', async () => {
    const context = {}
    const func = functionHandleExceptions(async function (arg1) {
      expect(this).toBe(context)
      return arg1
    })
    expect(await func.call(context, 1)).toBe(1)
  })

  test('preserves context of generator function', () => {
    const context = {}
    const func = functionHandleExceptions(function* (arg1) {
      expect(this).toBe(context)
      return arg1
    })
    const generator = func.call(context, 1)
    expect(generator.next()).toEqual({ done: true, value: 1 })
  })
})
