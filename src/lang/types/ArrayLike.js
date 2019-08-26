import anyIsArrayLike from '../util/anyIsArrayLike'
import deftype from '../deftype'

const ArrayLike = deftype('ArrayLike', 'A value that is indexed and has a length', {
  is: anyIsArrayLike
})

export default ArrayLike
