import Exception from './js/Exception'
import String from '../types/String'
import buildException from './buildException'
import definitionToFn from './definitionToFn'
import fnCall from './fnCall'
import fnGetMeta from './fnGetMeta'

describe('buildException', () => {
  test('builds a new Expected:Argument:toMatchParameter Exception', () => {
    const source = definitionToFn(function(arg1) {
      const exception = buildException(source)
        .expected.arg(arg1, 0)
        .toMatchParameter(fnGetMeta(source).parameters[0])
      expect(exception).toBeInstanceOf(Exception)
      expect(exception).toMatchObject({
        code: 'Expected:Argument:toMatchParameter',
        expected: {
          data: {
            parameter: fnGetMeta(source).parameters[0]
          },
          expectation: 'toMatchParameter'
        },
        source,
        target: {
          index: 0,
          type: 'Argument',
          value: 'foo'
        }
      })
    })

    fnCall(source, null, 'foo')
  })

  test('builds a new Expected:Argument:toMatchRegex Exception', () => {
    const source = definitionToFn(function(arg1) {
      const regex = /^bar$/
      const exception = buildException(source)
        .expected.arg(arg1, 0)
        .toMatchRegex(regex)
      expect(exception).toBeInstanceOf(Exception)
      expect(exception).toMatchObject({
        code: 'Expected:Argument:toMatchRegex',
        expected: {
          data: {
            regex
          },
          expectation: 'toMatchRegex'
        },
        source,
        target: {
          index: 0,
          type: 'Argument',
          value: 'foo'
        }
      })
    })

    fnCall(source, null, 'foo')
  })

  test('builds a new Expected:Arguments:toBeEmpty Exception', () => {
    const source = definitionToFn(function() {
      const exception = buildException(source)
        .expected.arguments(arguments)
        .toBeEmpty()
      expect(exception).toBeInstanceOf(Exception)
      expect(exception).toMatchObject({
        code: 'Expected:Arguments:toBeEmpty',
        expected: {
          expectation: 'toBeEmpty'
        },
        source,
        target: {
          type: 'Arguments',
          value: arguments
        }
      })
    })

    fnCall(source, null, 'foo')
  })

  test('builds a new Expected:Arguments:toBeOfMinLength Exception', () => {
    const source = definitionToFn(function() {
      const exception = buildException(source)
        .expected.arguments(arguments)
        .toBeOfMinLength(2)
      expect(exception).toBeInstanceOf(Exception)
      expect(exception).toMatchObject({
        code: 'Expected:Arguments:toBeOfMinLength',
        expected: {
          data: {
            length: 2
          },
          expectation: 'toBeOfMinLength'
        },
        source,
        target: {
          type: 'Arguments',
          value: arguments
        }
      })
    })

    fnCall(source, null, 'foo')
  })

  test('builds a new Expected:Returned:ToMatchReturns Exception', () => {
    const source = definitionToFn(
      function() {
        const returned = 'foo'
        const exception = buildException(source)
          .expected.returned(returned)
          .toMatchReturns(source.returns)
        expect(exception).toBeInstanceOf(Exception)
        expect(exception).toMatchObject({
          code: 'Expected:Returned:toMatchReturns',
          expected: {
            data: {
              returns: source.returns
            },
            expectation: 'toMatchReturns'
          },
          source,
          target: {
            type: 'Returned',
            value: 'foo'
          }
        })
        return returned
      },
      [() => String]
    )

    fnCall(source, null, 'foo')
  })
})
