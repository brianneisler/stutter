import {
  Error,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError
} from '../../../src/lang/util/js'

const values = [
  new Error(),
  new RangeError(),
  new ReferenceError(),
  new SyntaxError(),
  new TypeError(),
  new URIError()
]

const errors = () => values

export default errors
