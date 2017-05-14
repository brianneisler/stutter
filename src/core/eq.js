import Immutable from 'immutable'
import fn from './fn'

const eq = fn((value, other) => {
  return Immutable.is(value, other)
})

export default eq
