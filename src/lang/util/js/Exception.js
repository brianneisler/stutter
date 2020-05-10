import { TO_STRING_TAG } from '../../constants/Symbol'
import anyToStringTag from '../anyToStringTag'
import buildStackTrace from '../buildStackTrace'

class Exception {
  constructor({ code, expected, source, stack, target }) {
    this.code = code
    this.expected = expected
    this.jscallstack = buildStackTrace()
    this.source = source
    this.stack = buildStackTrace(stack)
    this.target = target
    this.type = `${anyToStringTag(expected)}:${target.type}:${
      expected.expectation
    }`
  }

  get [TO_STRING_TAG]() {
    return 'Exception'
  }

  toError() {
    const error = this.expected.toError(this)
    error.stack = this.stack + error.stack
    return error
  }
}

export default Exception
