import Immutable from 'immutable'
import defn from './defn'

const eq = defn((value, other) => {
  return Immutable.is(value, other)
})

export default eq
