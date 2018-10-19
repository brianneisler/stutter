import eval from '../eval'
import type from '../type'
import Any from './Any'
import List from './List'

const Form = type('Form', {

  operator: Any,
  operands: List,

  eval(obj) {
    return obj.operator(obj.rest)
  }
})

export default Form
