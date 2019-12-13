import SYMBOL_TO_STRING_TAG from '../../constants/SYMBOL_TO_STRING_TAG'
import anyToStringTag from '../anyToStringTag'
import buildStackTrace from '../buildStackTrace'

class Exception {
  constructor(source, target, expected) {
    this.source = source
    this.stack = buildStackTrace()
    this.target = target
    this.expected = expected
    this.code = `${anyToStringTag(expected)}:${target.type}:${expected.expectation}`
  }

  get [SYMBOL_TO_STRING_TAG]() {
    return 'Exception'
  }

  toError() {
    const error = this.expected.toError(this)
    error.stack = this.stack + error.stack
    return error
  }
}

export default Exception
