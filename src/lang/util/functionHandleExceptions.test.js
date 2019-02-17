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
})
