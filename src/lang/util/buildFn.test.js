import { FN } from '../constants/Symbol'
import Any from '../types/Any'
import Fn from './js/Fn'
import Number from '../types/Number'
import Parameter from './js/Parameter'
import String from '../types/String'
import buildFn from './buildFn'
import fnGetMeta from './fnGetMeta'

describe('buildFn', () => {
  it('generates a new function using the given function and defintion with a symbol pointing to the Fn instance ', async () => {
    const func = (argA, argB) => argB
    const meta = {
      parameters: [new Parameter('argA', Any), new Parameter('argB', Number)],
      returns: String
    }
    const fn = buildFn(func, meta)

    expect(fn).toBeInstanceOf(Function)
    expect(fn[FN]).toBeInstanceOf(Fn)
    expect(fn[FN].func).toBe(func)
    expect(fn[FN].meta).toBe(meta)
    expect(fn.length).toBe(2)
  })

  test('Sets the parameter length equal to parameters regardless of function parameter length', () => {
    const func = () => {
      return 'foo'
    }
    const meta = {
      parameters: [new Parameter('argA', Any), new Parameter('argB', Number)],
      returns: String
    }
    const fn = buildFn(func, meta)
    expect(fn.length).toBe(2)
  })

  test('Works when parameters are not supplied', () => {
    const func = () => {
      return 'foo'
    }
    const meta = {}
    const fn = buildFn(func, meta)
    expect(fn.length).toBe(0)
  })

  test('does not throw when types match correctly', () => {
    const fn = buildFn((arg1) => arg1, {
      parameters: [new Parameter('arg1', Number)],
      returns: Number
    })
    expect(fn(123)).toBe(123)
  })

  test('Defaults meta to an empty object', () => {
    const func = () => {
      return 'foo'
    }
    const fn = buildFn(func)
    expect(fnGetMeta(fn)).toEqual({})
  })

  test('throws an Exception when arg type does not match', () => {
    const fn = buildFn((arg1) => arg1, {
      parameters: [new Parameter('arg1', Number)],
      returns: String
    })
    expect(() => fn('foo')).toThrowMatchingObject({
      type: 'Expected:Argument:toMatchParameter'
    })
  })

  test('throws an Exception when there are not enough args', () => {
    const fn = buildFn((arg1) => arg1, {
      parameters: [new Parameter('arg1', Number)],
      returns: String
    })
    expect(() => fn()).toThrowMatchingObject({
      type: 'Expected:Arguments:toBeOfMinLength'
    })
  })

  test('throws an Exception when return type does not match returned value', () => {
    const fn = buildFn((arg1) => arg1, {
      parameters: [],
      returns: Number
    })
    expect(() => fn()).toThrowMatchingObject({
      type: 'Expected:Returned:toMatchReturns'
    })
  })

  test('works with an async function', async () => {
    const fn = buildFn(async () => 'foo', {
      parameters: [],
      resolve: true,
      returns: String
    })
    expect(await fn()).toEqual('foo')
  })

  test('throws an Exception when return type does not match in an async function', async () => {
    const fn = buildFn(async () => 'foo', {
      parameters: [],
      resolve: true,
      returns: Number
    })
    await expect(fn()).rejects.toMatchObject({
      type: 'Expected:Returned:toMatchReturns'
    })
  })

  test('throws an Exception when return type does not match in a generator function', () => {
    const fn = buildFn(
      function* () {
        return 'foo'
      },
      {
        parameters: [],
        resolve: true,
        returns: Number
      }
    )
    expect(() => {
      const generator = fn()
      generator.next()
    }).toThrowMatchingObject({ type: 'Expected:Returned:toMatchReturns' })
  })

  test('preserves context of function', () => {
    const context = {}
    const fn = buildFn(
      function (arg1) {
        expect(this).toBe(context)
        return arg1
      },
      {
        parameters: [new Parameter('arg1', String)],
        returns: String
      }
    )
    expect(fn.call(context, 'foo')).toEqual('foo')
  })
})
