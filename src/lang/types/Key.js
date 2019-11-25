import anyIsKey from '../util/anyIsKey'
import deftype from '../deftype'

const Key = deftype('lang.Key', 'A type representing a key for a Keyed value.', {
  is: anyIsKey
})

export default Key
