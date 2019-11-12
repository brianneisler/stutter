import Expected from './js/Expected'
import TypeError from './js/TypeError'
import anyToName from './anyToName'
import anyToStringTag from './anyToStringTag'
import functionToParameterNames from './functionToParameterNames'

const prefixNot = (not, expectation) => `${not ? 'not.' : ''}${expectation}`

const toBeEmpty = (next, not = false) => () =>
  next(
    new Expected({
      data: {},
      exceptionToError: (exception) =>
        new TypeError(`
        ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
          not ? 'at least one Parameter' : 'no Parameters'
        }.
        `),
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
        new TypeError(`
        ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
          exception.target.type
        } ${not ? 'NOT ' : ''}to be of minimum length ${expected.data.length}.
        `),
      expectation: prefixNot(not, 'toBeOfMinLength')
    })
  )

const toMatchParameter = (next, not = false) => (parameter) =>
  next(
    new Expected({
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
        `),
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
        return new TypeError(`
          ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
          exception.target.type
        } for Parameter '${parameterName}' ${not ? 'NOT ' : ''}to match regex ${
          expected.data.regex
        }. Instead was given ${exception.target.value}.
        `)
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
        new TypeError(`
          ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
          exception.target.type
        } value to ${not ? 'NOT ' : ''}return a ${anyToName(
          expected.data.returns
        )}. Instead was given ${exception.target.value}.
        `),
      expectation: prefixNot(not, 'toMatchReturns')
    })
  )

const buildExpected = (type, next) => {
  switch (type) {
    case 'Argument':
      return {
        not: {
          toMatchParameter: toMatchParameter(next, true),
          toMatchRegex: toMatchRegex(next, true)
        },
        toMatchParameter: toMatchParameter(next),
        toMatchRegex: toMatchRegex(next)
      }

    case 'Arguments':
      return {
        not: {
          toBeEmpty: toBeEmpty(next, true),
          toBeOfMinLength: toBeOfMinLength(next, true)
        },
        toBeEmpty: toBeEmpty(next),
        toBeOfMinLength: toBeOfMinLength(next)
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
