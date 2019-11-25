import anyIsInteger from '../util/anyIsInteger'
import anyToInteger from '../util/anyToInteger'
import deftype from '../deftype'

const Integer = deftype(
  'lang.Integer',
  'A type representing an number that is divisible by 1 with no remainder.',
  {
    is: anyIsInteger,
    to: anyToInteger
  }
)

export default Integer
