import Number from '../types/Number'
import Parameter from '../classes/Parameter'
import Self from '../types/Self'
import functionTypeCheck from './functionTypeCheck'

describe('functionTypeCheck', () => {
  test('throws an Exception when arg type does not match', () => {
    const func = functionTypeCheck((arg1) => arg1, {
      parameters: [new Parameter('arg1', Number)]
    })
    expect(() => func('foo')).toThrowMatchingObject({
      type: 'Expected:Argument:toMatchParameter'
    })
  })

  test('throws an Exception when there are not enough args', () => {
    const func = functionTypeCheck((arg1) => arg1, {
      parameters: [new Parameter('arg1', Number)]
    })
    expect(() => func()).toThrowMatchingObject({
      type: 'Expected:Arguments:toBeOfMinLength'
    })
  })

  test('throws an Exception when return type does not match returned value', () => {
    const func = functionTypeCheck(() => 'foo', {
      returns: Number
    })
    expect(() => func()).toThrowMatchingObject({
      type: 'Expected:Returned:toMatchReturns'
    })
  })

  test('throws an Exception when return type does not match in an async function', async () => {
    const func = functionTypeCheck(async () => 'foo', {
      resolve: true,
      returns: Number
    })
    await expect(func()).rejects.toMatchObject({
      type: 'Expected:Returned:toMatchReturns'
    })
  })

  test('throws an Exception when return type does not match in a generator function', () => {
    const func = functionTypeCheck(
      function* () {
        return 'foo'
      },
      {
        resolve: true,
        returns: Number
      }
    )
    expect(() => {
      const generator = func()
      generator.next()
    }).toThrowMatchingObject({ type: 'Expected:Returned:toMatchReturns' })
  })

  test('throws an Exception when arg does not match Self type', () => {
    const func = functionTypeCheck((arg1) => arg1, {
      parameters: [new Parameter('arg1', Self)],
      self: Number
    })
    expect(() => func('foo')).toThrowMatchingObject({
      type: 'Expected:Argument:toMatchParameter'
    })
  })

  test('does not throw when types match correctly', () => {
    const func = functionTypeCheck((arg1) => arg1, {
      parameters: [new Parameter('arg1', Number)],
      returns: Number
    })
    expect(func(123)).toBe(123)
  })

  test('does not throw when types match Self type correctly', () => {
    const func = functionTypeCheck((arg1) => arg1, {
      parameters: [new Parameter('arg1', Self)],
      returns: Self,
      self: Number
    })
    expect(func(123)).toBe(123)
  })

  test('function remains the original function when function is not typed', () => {
    const original = (arg1) => arg1
    const func = functionTypeCheck(original, {})
    expect(func).toBe(original)
  })
})
