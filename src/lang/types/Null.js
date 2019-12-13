import anyIsNull from '../util/anyIsNull'
import deftype from '../deftype'

const Null = deftype(
  'lang.Null',
  'A type representing a `null` value.',

  {
    is: anyIsNull
  }
)

export default Null
