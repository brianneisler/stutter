import anyIsNil from '../util/anyIsNil'
import deftype from '../deftype'

const Nil = deftype(
  'lang.Nil',
  'A type representing a null or undefined value.',

  {
    is: anyIsNil
  }
)

export default Nil
