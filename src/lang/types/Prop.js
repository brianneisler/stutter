import anyIsProp from '../util/anyIsProp'
import deftype from '../deftype'

const Prop = deftype(
  'lang.Prop',
  'A type representing a key for a Proped value.',

  {
    is: anyIsProp
  }
)

export default Prop
