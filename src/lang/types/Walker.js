import anyIsWalker from '../util/anyIsWalker'
import anyToWalker from '../util/anyToWalker'
import deftype from '../deftype'

const Walker = deftype('lang.Walker', 'A type representing a Walker.', {
  is: anyIsWalker,
  to: anyToWalker
})

export default Walker
