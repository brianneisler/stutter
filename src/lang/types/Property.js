import anyIsProperty from '../util/anyIsProperty'
import deftype from '../deftype'

const Property = deftype(
  'lang.Property',
  'A type representing a key for a Proped value.',

  {
    is: anyIsProperty
  }
)

export default Property
