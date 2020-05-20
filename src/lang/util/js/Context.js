import { TO_STRING_TAG } from '../../constants/Symbol'
import ImmutableStack from './ImmutableStack'

class Context {
  constructor({ callee, callstack, jsContext }) {
    this.callee = callee
    this.callstack = callstack || ImmutableStack()
    this.jsContext = jsContext || null
  }

  get [TO_STRING_TAG]() {
    return 'Context'
  }

  pushCallstack(call) {
    return new Context({
      ...this,
      callstack: this.callstack.push({
        ...call,
        callee: this.callee
      })
    })
  }

  setCallee(callee) {
    return new Context({
      ...this,
      callee
    })
  }
}

export default Context
