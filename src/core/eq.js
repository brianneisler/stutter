import Immutable from 'immutable'
import fn from './fn'

const eq = fn((other, value) => {
  return Immutable.is(value, other)
})

export default eq
