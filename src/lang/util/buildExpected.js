import Expected from './js/Expected'
import TypeError from './js/TypeError'
import anyToName from './anyToName'
import anyToString from './anyToString'
import fnGetMeta from './fnGetMeta'
import functionToParameterNames from './functionToParameterNames'
import parameterToString from './parameterToString'
import sourceToString from './sourceToString'

const prefixNot = (not, expectation) => `${not ? 'not.' : ''}${expectation}`

const fnToSignatureString = (fn) => {
  const { parameters } = fnGetMeta(fn)
  return `[${parameters.map(parameterToString).join(', ')}]`
}

const targetToString = (target) => `${target.type}:${anyToString(target.value)}`

const toBeEmpty = (next, not = false) => () =>
  next(
    new Expected({
      data: {},
      exceptionToError: (exception) =>
        new TypeError(
          `${sourceToString(exception.source)} expected ${
            not ? 'at least one Parameter' : 'no Parameters'
          }.`
        ),
      expectation: prefixNot(not, 'toBeEmpty')
    })
  )

const toBeOfMinLength = (next, not = false) => (length) =>
  next(
    new Expected({
      data: {
        length
      },
      exceptionToError: (exception, expected) =>
        new TypeError(
          `${sourceToString(exception.source)} expected ${targetToString(exception.target)} ${
            not ? 'NOT ' : ''
          }to be of minimum length ${expected.data.length}.`
        ),
      expectation: prefixNot(not, 'toBeOfMinLength')
    })
  )

const toMatchDispatcher = (next, not = false) => (dispatcher) =>
  next(
    new Expected({
      data: {
        dispatcher
      },
      exceptionToError: (exception, expected) => {
        const allFns = expected.data.dispatcher.getAllPossibleFns()
        return new TypeError(
          `${sourceToString(exception.source)} expected ${targetToString(exception.target)} ${
            not ? 'NOT ' : ''
          }to match one of the following method signatures.\n${allFns
            .map((fn) => `* ${fnToSignatureString(fn)}`)
            .join('\n')}`
        )
      },
      expectation: prefixNot(not, 'toMatchDispatcher')
    })
  )

const toMatchParameter = (next, not = false) => (parameter) =>
  next(
    new Expected({
      data: {
        parameter
      },
      exceptionToError: (exception, expected) =>
        new TypeError(
          `${sourceToString(exception.source)} expected ${targetToString(
            exception.target
          )} for Parameter ${anyToName(expected.data.parameter)} to ${not ? 'NOT ' : ''}be a ${
            expected.data.parameter.type
          }. Instead was given ${exception.target.value}.`
        ),
      expectation: prefixNot(not, 'toMatchParameter')
    })
  )

const toMatchRegex = (next, not = false) => (regex) =>
  next(
    new Expected({
      data: {
        regex
      },
      exceptionToError: (exception, expected) => {
        const parameterName = functionToParameterNames(exception.source)[exception.target.index]
        return new TypeError(
          `${sourceToString(exception.source)} expected ${targetToString(
            exception.target
          )} for Parameter '${parameterName}' ${not ? 'NOT ' : ''}to match regex ${
            expected.data.regex
          }.`
        )
      },
      expectation: prefixNot(not, 'toMatchRegex')
    })
  )

const toMatchReturns = (next, not = false) => (returns) =>
  next(
    new Expected({
      data: {
        returns
      },
      exceptionToError: (exception, expected) =>
        new TypeError(
          `${sourceToString(exception.source)} expected ${targetToString(
            exception.target
          )} value to ${not ? 'NOT ' : ''}return a ${anyToName(
            expected.data.returns
          )}. Instead was given ${targetToString(exception.target)}.`
        ),
      expectation: prefixNot(not, 'toMatchReturns')
    })
  )

const toSatisfyProtocol = (next, not = false) => (protocol) =>
  next(
    new Expected({
      data: {
        protocol
      },
      exceptionToError: (exception, expected) =>
        new TypeError(
          `${sourceToString(exception.source)} expected ${targetToString(exception.target)} to ${
            not ? 'NOT ' : ''
          }satisfy the Protocol ${anyToName(
            expected.data.protocol
          )}. Instead was given ${targetToString(exception.target)}.`
        )
    })
  )

const buildExpected = (type, next) => {
  switch (type) {
    case 'Argument':
      return {
        not: {
          toMatchParameter: toMatchParameter(next, true),
          toMatchRegex: toMatchRegex(next, true),
          toSatisfyProtocol: toSatisfyProtocol(next, true)
        },
        toMatchParameter: toMatchParameter(next),
        toMatchRegex: toMatchRegex(next),
        toSatisfyProtocol: toSatisfyProtocol(next)
      }

    case 'Arguments':
      return {
        not: {
          toBeEmpty: toBeEmpty(next, true),
          toBeOfMinLength: toBeOfMinLength(next, true),
          toMatchDispatcher: toMatchDispatcher(next, true)
        },
        toBeEmpty: toBeEmpty(next),
        toBeOfMinLength: toBeOfMinLength(next),
        toMatchDispatcher: toMatchDispatcher(next)
      }
    case 'Returned':
      return {
        not: {
          toMatchReturns: toMatchReturns(next, true)
        },
        toMatchReturns: toMatchReturns(next)
      }
  }
  throw new Error(`Unhandled type '${type}'in buildExpected`)
}

export default buildExpected
