import anyIsArrayLike from '../util/anyIsArrayLike'
import deftype from '../deftype'

const ArrayLike = deftype(
  'lang.ArrayLike',
  {
    description: 'A value that is indexed and has a length',
    since: 'v0.1.0'
  },

  {
    is: anyIsArrayLike
  }
)

export default ArrayLike
