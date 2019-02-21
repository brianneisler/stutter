import Expected from './js/Expected'
import TypeError from './js/TypeError'
import anyToName from './anyToName'
import anyToStringTag from './anyToStringTag'
import functionToParameterNames from './functionToParameterNames'

const prefixNot = (not, expectation) => `${not ? 'not.' : ''}${expectation}`

const toBeEmpty = (next, not = false) => () =>
  next(
    new Expected({
      expectation: prefixNot(not, 'toBeEmpty'),
      data: {},
      exceptionToError: (exception) =>
        new TypeError(`
        ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
          not ? 'at least one Parameter' : 'no Parameters'
        }.
        `)
    })
  )

const toBeOfMinLength = (next, not = false) => (length) =>
  next(
    new Expected({
      expectation: prefixNot(not, 'toBeOfMinLength'),
      data: {
        length
      },
      exceptionToError: (exception, expected) =>
        new TypeError(`
        ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
          exception.target.type
        } ${not ? 'NOT ' : ''}to be of minimum length ${expected.data.length}.
        `)
    })
  )

const toMatchParameter = (next, not = false) => (parameter) =>
  next(
    new Expected({
      expectation: prefixNot(not, 'toMatchParameter'),
      data: {
        parameter
      },
      exceptionToError: (exception, expected) =>
        new TypeError(`
          ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
          exception.target.type
        } for Parameter ${anyToName(expected.data.parameter)} to ${not ? 'NOT ' : ''}be a ${
          expected.data.parameter.type
        }. Instead was given ${exception.target.value}.
        `)
    })
  )

const toMatchRegex = (next, not = false) => (regex) =>
  next(
    new Expected({
      expectation: prefixNot(not, 'toMatchRegex'),
      data: {
        regex
      },
      exceptionToError: (exception, expected) => {
        const parameterName = functionToParameterNames(exception.source)[exception.target.index]
        return new TypeError(`
          ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
          exception.target.type
        } for Parameter '${parameterName}' ${not ? 'NOT ' : ''}to match regex ${
          expected.data.regex
        }. Instead was given ${exception.target.value}.
        `)
      }
    })
  )

const toMatchReturns = (next, not = false) => (returns) =>
  next(
    new Expected({
      expectation: prefixNot(not, 'toMatchReturns'),
      data: {
        returns
      },
      exceptionToError: (exception, expected) =>
        new TypeError(`
          ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
          exception.target.type
        } value to ${not ? 'NOT ' : ''}return a ${anyToName(
          expected.data.returns
        )}. Instead was given ${exception.target.value}.
        `)
    })
  )

const buildExpected = (type, next) => {
  switch (type) {
    case 'Argument':
      return {
        toMatchParameter: toMatchParameter(next),
        toMatchRegex: toMatchRegex(next),
        not: {
          toMatchParameter: toMatchParameter(next, true),
          toMatchRegex: toMatchRegex(next, true)
        }
      }

    case 'Arguments':
      return {
        toBeEmpty: toBeEmpty(next),
        toBeOfMinLength: toBeOfMinLength(next),
        not: {
          toBeEmpty: toBeEmpty(next, true),
          toBeOfMinLength: toBeOfMinLength(next, true)
        }
      }
    case 'Returned':
      return {
        toMatchReturns: toMatchReturns(next),
        not: {
          toMatchReturns: toMatchReturns(next, true)
        }
      }
  }
  throw new Error(`Unhandled type '${type}'in buildExpected`)
}

export default buildExpected
