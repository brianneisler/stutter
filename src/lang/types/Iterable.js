import anyIsIterable from '../util/anyIsIterable'
import deftype from '../deftype'

const Iterable = deftype(
  'lang.Iterable',
  'A type representing an number that is divisible by 1 with no remainder.',

  {
    is: anyIsIterable
  }
)

export default Iterable
