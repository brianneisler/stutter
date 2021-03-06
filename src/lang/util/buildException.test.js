import Exception from '../classes/Exception'
import String from '../types/String'
import buildException from './buildException'
import createContext from './createContext'
import definitionToFn from './definitionToFn'
import fnCall from './fnCall'
import fnGetMeta from './fnGetMeta'

describe('buildException', () => {
  test('builds a new Expected:Argument:toMatchParameter Exception', () => {
    const testContext = createContext({
      callee: this
    })
    const source = definitionToFn(function (arg1) {
      const exception = buildException(source)
        .expected.arg(arg1, 0)
        .toMatchParameter(fnGetMeta(source).parameters[0])
      expect(exception).toBeInstanceOf(Exception)
      expect(exception).toMatchObject({
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
        },
        type: 'Expected:Argument:toMatchParameter'
      })
    })

    fnCall(source, testContext, 'foo')
  })

  test('builds a new Expected:Argument:toMatchRegex Exception', () => {
    const testContext = createContext({
      callee: this
    })
    const source = definitionToFn(function (arg1) {
      const regex = /^bar$/
      const exception = buildException(source)
        .expected.arg(arg1, 0)
        .toMatchRegex(regex)
      expect(exception).toBeInstanceOf(Exception)
      expect(exception).toMatchObject({
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
        },
        type: 'Expected:Argument:toMatchRegex'
      })
    })

    fnCall(source, testContext, 'foo')
  })

  test('builds a new Expected:Arguments:toBeEmpty Exception', () => {
    const testContext = createContext({
      callee: this
    })
    const source = definitionToFn(function () {
      const exception = buildException(source)
        .expected.arguments(arguments)
        .toBeEmpty()
      expect(exception).toBeInstanceOf(Exception)
      expect(exception).toMatchObject({
        expected: {
          expectation: 'toBeEmpty'
        },
        source,
        target: {
          type: 'Arguments',
          value: arguments
        },
        type: 'Expected:Arguments:toBeEmpty'
      })
    })

    fnCall(source, testContext, 'foo')
  })

  test('builds a new Expected:Arguments:toBeOfMinLength Exception', () => {
    const testContext = createContext({
      callee: this
    })
    const source = definitionToFn(function () {
      const exception = buildException(source)
        .expected.arguments(arguments)
        .toBeOfMinLength(2)
      expect(exception).toBeInstanceOf(Exception)
      expect(exception).toMatchObject({
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
        },
        type: 'Expected:Arguments:toBeOfMinLength'
      })
    })

    fnCall(source, testContext, 'foo')
  })

  test('builds a new Expected:Returned:ToMatchReturns Exception', () => {
    const testContext = createContext({
      callee: this
    })
    const source = definitionToFn(
      function () {
        const returned = 'foo'
        const exception = buildException(source)
          .expected.returned(returned)
          .toMatchReturns(source.returns)
        expect(exception).toBeInstanceOf(Exception)
        expect(exception).toMatchObject({
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
          },
          type: 'Expected:Returned:toMatchReturns'
        })
        return returned
      },
      [() => String]
    )

    fnCall(source, testContext, 'foo')
  })
})
