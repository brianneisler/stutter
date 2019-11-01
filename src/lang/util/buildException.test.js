import Exception from './js/Exception'
import Number from '../types/Number'
import buildException from './buildException'
import buildFn from './buildFn'
import fnCall from './fnCall'

describe('buildException', () => {
  test('builds a new Expected:Argument:toMatchParameter Exception', () => {
    const source = buildFn(function(arg1) {
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

    fnCall(source, 'foo')
  })

  test('builds a new Expected:Argument:toMatchRegex Exception', () => {
    const source = buildFn(function(arg1) {
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
    })

    fnCall(source, 'foo')
  })

  test('builds a new Expected:Arguments:toBeEmpty Exception', () => {
    const source = buildFn(function() {
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
    })

    fnCall(source, 'foo')
  })

  test('builds a new Expected:Arguments:toBeOfMinLength Exception', () => {
    const source = buildFn(function() {
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
    })

    fnCall(source, 'foo')
  })

  test('builds a new Expected:Arguments:toBeOfMinLength Exception', () => {
    const source = buildFn(
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

    fnCall(source, 'foo')
  })
})
