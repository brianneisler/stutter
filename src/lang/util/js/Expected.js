import SYMBOL_TO_STRING_TAG from '../../constants/SYMBOL_TO_STRING_TAG'
import TypeError from './TypeError'
import anyToName from '../anyToName'
import anyToStringTag from '../anyToStringTag'
import functionToParameterNames from '../functionToParameterNames'

const newToMatchParameterTypeError = (not) =>
  new TypeError(`
          ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
          exception.target.type
        } for Parameter ${anyToName(this.data.parameter)} to ${not ? 'NOT ' : ''} be a ${
          this.data.parameter.type
        }. Instead was given ${exception.target.value}.
        `)
}

class Expected {
  constructor({ data, expectation }) {
    this.data = data
    this.expectation = expectation
  }

  get [SYMBOL_TO_STRING_TAG]() {
    return 'Expected'
  }

  toError(exception) {
    // TODO BRN: Find a better implementation for this switch statement
    switch (this.expectation) {
      case 'not.toMatchParameter':
        return
      case 'toMatchParameter':
        return new TypeError(`
          ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
          exception.target.type
        } for Parameter ${anyToName(this.data.parameter)} to be a ${
          this.data.parameter.type
        }. Instead was given ${exception.target.value}.
        `)
      case 'not.toMatchRegex':
        const parameterName = functionToParameterNames(exception.source)[exception.target.index]
        return new TypeError(`
          ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
          exception.target.type
        } for Parameter '${parameterName}' NOT to match regex ${
          this.data.regex
        }. Instead was given ${exception.target.value}.
        `)
      case 'toMatchRegex':
        const parameterName = functionToParameterNames(exception.source)[exception.target.index]
        return new TypeError(`
          ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected ${
          exception.target.type
        } for Parameter '${parameterName}' to match regex ${this.data.regex}. Instead was given ${
          exception.target.value
        }.
        `)
      case 'not.toBeEmpty':
        return new TypeError(`
        ${anyToStringTag(exception.source)} ${anyToName(
          exception.source
        )} expected at least one Parameter.
        `)
      case 'toBeEmpty':
        return new TypeError(`
        ${anyToStringTag(exception.source)} ${anyToName(exception.source)} expected no Parameters.
        `)
    }

    throw new Error('Could not find matching error for exception')
  }
}

export default Expected
