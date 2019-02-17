import SYMBOL_TO_STRING_TAG from '../../constants/SYMBOL_TO_STRING_TAG'
import anyToStringTag from '../anyToStringTag'

class Exception {
  constructor(source, target, expected) {
    this.source = source
    this.target = target
    this.expected = expected
    this.code = `${anyToStringTag(expected)}:${target.type}:${expected.expectation}`
  }

  get [SYMBOL_TO_STRING_TAG]() {
    return 'Exception'
  }

  toError() {
    return this.expected.toError(this)
  }
}

export default Exception
