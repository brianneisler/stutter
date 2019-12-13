import anyIsUndefined from '../util/anyIsUndefined'
import deftype from '../deftype'

const Undefined = deftype(
  'lang.Undefined',
  'A type representing an `undefined` value.',

  {
    is: anyIsUndefined
  }
)

export default Undefined
