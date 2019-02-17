import Exception from './js/Exception'
import buildException from './buildException'
import functionTypify from './functionTypify'

describe('buildException', () => {
  test('builds a new Expected:Argument:toMatchParameter Exception', () => {
    const source = functionTypify(function(arg1) {
      const exception = buildException(source)
        .expected.arg(arg1, 0)
        .toMatchParameter(source.parameters[0])
      expect(exception).toBeInstanceOf(Exception)
      expect(exception).toMatchObject({
        source,
        target: {
          type: 'Argument',
          index: 0,
          value: 'foo'
        },
        expected: {
          expectation: 'toMatchParameter',
          data: {
            parameter: source.parameters[0]
          }
        },
        code: 'Expected:Argument:toMatchParameter'
      })
    })

    source('foo')
  })

  test('builds a new Expected:Argument:toMatchRegex Exception', () => {
    const source = function(arg1) {
      const regex = /^bar$/
      const exception = buildException(source)
        .expected.arg(arg1, 0)
        .toMatchRegex(regex)
      expect(exception).toBeInstanceOf(Exception)
      expect(exception).toMatchObject({
        source,
        target: {
          type: 'Argument',
          index: 0,
          value: 'foo'
        },
        expected: {
          expectation: 'toMatchRegex',
          data: {
            regex
          }
        },
        code: 'Expected:Argument:toMatchRegex'
      })
    }

    source('foo')
  })
})
