import Number from '../types/Number'
import Parameter from './js/Parameter'
import functionTypeCheck from './functionTypeCheck'
import functionDefineTypes from './functionDefineTypes'

describe('functionTypeCheck', () => {
  test('throws an Exception when arg type does not match', () => {
    const func = functionTypeCheck(functionDefineTypes((arg1) => arg1, [Number]))
    expect(() => func('foo')).toThrowMatchingObject({ code: 'Expected:Argument:toMatchParameter' })
  })

  test('throws an Exception when there are not enough args', () => {
    const func = functionTypeCheck(functionDefineTypes((arg1) => arg1, [Number]))
    expect(() => func()).toThrowMatchingObject({ code: 'Expected:Arguments:toBeOfMinLength' })
  })

  test('throws an Exception when return type does not match returned value', () => {
    const func = functionTypeCheck(functionDefineTypes(() => 'foo', [() => Number]))
    expect(() => func()).toThrowMatchingObject({ code: 'Expected:Returned:toMatchReturns' })
  })

  test('throws an Exception when return type does not match in an async function', async () => {
    const func = functionTypeCheck(functionDefineTypes(async () => 'foo', [() => Number]))
    await expect(func()).rejects.toMatchObject({ code: 'Expected:Returned:toMatchReturns' })
  })

  test('throws an Exception when return type does not match in a generator function', () => {
    const func = functionTypeCheck(
      functionDefineTypes(
        function*() {
          return 'foo'
        },
        [() => Number]
      )
    )
    expect(() => {
      const generator = func()
      generator.next()
    }).toThrowMatchingObject({ code: 'Expected:Returned:toMatchReturns' })
  })

  test('does not throw when types match correctly', () => {
    const func = functionTypeCheck(functionDefineTypes((arg1) => arg1, [Number, () => Number]))
    expect(func(123)).toBe(123)
  })

  test('function remains the original function when function is not typed', () => {
    const original = (arg1) => arg1
    const func = functionTypeCheck(original)
    expect(func).toBe(original)
  })

  test('preserves meta data of function', () => {
    const func = functionDefineTypes((arg1) => arg1, [Number, () => Number])
    const wrapped = functionTypeCheck(func)
    expect(wrapped.parameters).toEqual([new Parameter('arg1', Number)])
    expect(wrapped.returns).toEqual(Number)
  })
})