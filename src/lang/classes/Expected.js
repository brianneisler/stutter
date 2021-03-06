import { TO_STRING_TAG } from '../constants/Symbol'

class Expected {
  constructor({ data, exceptionToError, expectation }) {
    this.data = data
    this.expectation = expectation
    if (!exceptionToError) {
      throw new Error(
        'Expected instance must provide a conversion method for converting from Exception to Errors'
      )
    }
    this.exceptionToError = exceptionToError
  }

  get [TO_STRING_TAG]() {
    return 'Expected'
  }

  toError(exception) {
    return this.exceptionToError(exception, this)
  }
}

export default Expected
