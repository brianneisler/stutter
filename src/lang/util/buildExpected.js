import Expected from './js/Expected'

const prefixNot = (not, expectation) => `${not ? 'not.' : ''}${expectation}`

const toMatchParameter = (next, not = false) => (parameter) =>
  next(
    new Expected({
      expectation: prefixNot(not, 'toMatchParameter'),
      data: {
        parameter
      }
    })
  )

const toMatchRegex = (next, not = false) => (regex) =>
  next(
    new Expected({
      expectation: prefixNot(not, 'toMatchRegex'),
      data: {
        regex
      }
    })
  )

const toBeEmpty = (next, not = false) => () =>
  next(
    new Expected({
      expectation: prefixNot(not, 'toBeEmpty'),
      data: {}
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
        not: {
          toBeEmpty: toBeEmpty(next, true)
        }
      }
  }
  throw new Error(`Unhandled type '${type}'in buildExpected`)
}

export default buildExpected
