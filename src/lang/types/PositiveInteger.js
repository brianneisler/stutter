import anyIsPositiveInteger from '../util/anyIsPositiveInteger'
import anyToPositiveInteger from '../util/anyToPositiveInteger'
import deftype from '../deftype'

const PositiveInteger = deftype(
  'lang.PositiveInteger',
  'A type representing an number that is divisible by 1 with no remainder and greater then or equal to 0.',
  {
    is: anyIsPositiveInteger,
    to: anyToPositiveInteger
  }
)

export default PositiveInteger
