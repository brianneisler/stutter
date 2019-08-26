import Exception from './js/Exception'
import Number from '../types/Number'
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

  test('builds a new Expected:Arguments:toBeEmpty Exception', () => {
    const source = function() {
      const exception = buildException(source)
        .expected.arguments(arguments)
        .toBeEmpty()
      expect(exception).toBeInstanceOf(Exception)
      expect(exception).toMatchObject({
        source,
        target: {
          type: 'Arguments',
          value: arguments
        },
        expected: {
          expectation: 'toBeEmpty'
        },
        code: 'Expected:Arguments:toBeEmpty'
      })
    }

    source('foo')
  })

  test('builds a new Expected:Arguments:toBeOfMinLength Exception', () => {
    const source = function() {
      const exception = buildException(source)
        .expected.arguments(arguments)
        .toBeOfMinLength(2)
      expect(exception).toBeInstanceOf(Exception)
      expect(exception).toMatchObject({
        source,
        target: {
          type: 'Arguments',
          value: arguments
        },
        expected: {
          expectation: 'toBeOfMinLength',
          data: {
            length: 2
          }
        },
        code: 'Expected:Arguments:toBeOfMinLength'
      })
    }

    source('foo')
  })

  test('builds a new Expected:Arguments:toBeOfMinLength Exception', () => {
    const source = functionTypify(
      function() {
        const returned = 'foo'
        const exception = buildException(source)
          .expected.returned(returned)
          .toMatchReturns(source.returns)
        expect(exception).toBeInstanceOf(Exception)
        expect(exception).toMatchObject({
          source,
          target: {
            type: 'Returned',
            value: 'foo'
          },
          expected: {
            expectation: 'toMatchReturns',
            data: {
              returns: source.returns
            }
          },
          code: 'Expected:Returned:toMatchReturns'
        })
      },
      [() => Number]
    )

    source('foo')
  })
})
