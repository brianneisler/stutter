import SYMBOL_TO_STRING_TAG from '../../constants/SYMBOL_TO_STRING_TAG'
import TypeError from './TypeError'
import anyToName from '../anyToName'
import anyToStringTag from '../anyToStringTag'
import functionToParameterNames from '../functionToParameterNames'

const newTypeErrorToMatchParameter = (not, exception) =>
  new TypeError(`
    ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
    exception.target.type
  } for Parameter ${anyToName(this.data.parameter)} to ${not ? 'NOT ' : ''} be a ${
    this.data.parameter.type
  }. Instead was given ${exception.target.value}.
  `)

const newTypeErrorToMatchRegex = (not, exception) => {
  const parameterName = functionToParameterNames(exception.source)[exception.target.index]
  return new TypeError(`
    ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
    exception.target.type
  } for Parameter '${parameterName}' ${not ? 'NOT ' : ''} to match regex ${
    this.data.regex
  }. Instead was given ${exception.target.value}.
  `)
}

const newTypeErrorToBeEmpty = (not, exception) =>
  new TypeError(`
  ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
    not ? 'at least one Parameter' : 'no Parameters'
  }.
  `)

class Expected {
  constructor({ data, expectation }) {
    this.data = data
    this.expectation = expectation
  }

  get [SYMBOL_TO_STRING_TAG]() {
    return 'Expected'
  }

  toError(exception) {
    const parts = this.expectation.split('.')
    const expectation = parts.length === 1 ? parts[0] : parts[1]
    const not = parts[0] === 'not'

    // TODO BRN: Find a better implementation for this switch statement
    switch (expectation) {
      case 'toMatchParameter':
        return newTypeErrorToMatchParameter(not, exception)
      case 'toMatchRegex':
        return newTypeErrorToMatchRegex(not, exception)
      case 'toBeEmpty':
        return newTypeErrorToBeEmpty(not, exception)
    }

    throw new Error('Could not find matching error for exception')
  }
}

export default Expected
