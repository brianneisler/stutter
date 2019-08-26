import Number from '../types/Number'
import Parameter from './js/Parameter'
import buildException from './buildException'
import functionHandleExceptions from './functionHandleExceptions'
import functionTypify from './functionTypify'

describe('functionHandleExceptions', () => {
  test('converts exceptions into errors and rethrows them', () => {
    const func = functionHandleExceptions(
      functionTypify((arg1) => {
        throw buildException(func)
          .expected.arg(arg1, 0)
          .toMatchParameter(func.parameters[0])
      })
    )
    expect(() => func('foo')).toThrow(TypeError)
  })

  test('converts exceptions into errors and rethrows them in an async function', async () => {
    const func = functionHandleExceptions(
      functionTypify(async (arg1) => {
        throw buildException(func)
          .expected.arg(arg1, 0)
          .toMatchParameter(func.parameters[0])
      })
    )
    await expect(func('foo')).rejects.toBeInstanceOf(TypeError)
  })

  test('converts exceptions into errors and rethrows them in a generator function', () => {
    const func = functionHandleExceptions(
      functionTypify(function*(arg1) {
        throw buildException(func)
          .expected.arg(arg1, 0)
          .toMatchParameter(func.parameters[0])
      })
    )
    expect(() => {
      const generator = func('foo')
      generator.next()
    }).toThrow(TypeError)
  })

  test('preserves meta data of function', () => {
    const func = functionTypify((arg1) => arg1, [Number, () => Number])
    const wrapped = functionHandleExceptions(func)
    expect(wrapped.parameters).toEqual([new Parameter('arg1', Number)])
    expect(wrapped.returns).toEqual(Number)
  })
})
