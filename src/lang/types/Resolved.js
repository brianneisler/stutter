import anyIsResolved from '../util/anyIsResolved'
import deftype from '../deftype'

const Resolved = deftype('lang.Resolved', 'A type representing a Resolved value.', {
  is: anyIsResolved
})

export default Resolved
